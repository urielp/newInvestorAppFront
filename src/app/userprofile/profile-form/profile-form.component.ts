import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {DatePipe} from '@angular/common';
import {dateValidator} from '../../core/date.validator';
import {DATE_REGEX, EMAIL_REGEX} from '../../core/formsUtils.factory';
import {CreateUserService} from '../create-user.service';
import {InvestorFormModel, InvestorModel} from '../../core/models/investor.model';
import {UserService} from '../user-service';
import {NotificationsService} from '../../services/notifications.service';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs';
import {SocketIoService} from '../../core/socket.io.service';
import {NOTIF_TYPE, NOTIF_ICON_TYPE, NOTIF_MESSEGAES, NOTIF_TITLE, NOTIF_ALIGNMENT} from '../../core/notification.types';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit , OnDestroy {

  @Input() user: InvestorModel;
  isEdit: boolean;
  userForm: FormGroup;
  datesGroup: AbstractControl;
  formError: any;
  formChangeSubscription: Subscription;
  submitUserSub: Subscription;
  ioSubscription: Subscription;
  error: boolean;
  submmiting: boolean;
  submitBtnText: string;
  formUser: InvestorFormModel;
  submitUserObj: InvestorModel;
  connection;
  private socket;
  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private router: Router,
    public us: CreateUserService,
    private userService: UserService,
    private notification: NotificationsService,
    private sockService: SocketIoService
  ) {
  }


  ngOnInit() {
    this.formError = this.us.formErrors;
    this.isEdit = !!this.user;
    this.submitBtnText = this.isEdit ? 'עדכן פרופיל' : 'צור משתמש חדש';
    this.formUser = this._setFormUser();
    this._buildForm();
    this.connection = this.sockService.getUpdate().subscribe(message => {
      console.log(message);
      this.notification.showNotification(
        NOTIF_ALIGNMENT.BOTTOM,
        NOTIF_ALIGNMENT.LEFT,
        NOTIF_TITLE.GENERAL_UPDATE,
        NOTIF_MESSEGAES.GENERAL_UPDATE,
        NOTIF_TYPE.INFO,
        NOTIF_ICON_TYPE.INFO);
    });
  }
ngOnDestroy() {
this.connection.unsubscribe();
}

  private _setFormUser() {
    if (!this.isEdit) {
      // adding new user,create new
      // formUserModel with default null values
      return new InvestorFormModel(null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, null);
    } else {
      // if editing an exist  user,create new form
      // with the existing data
      const _shortDate = 'd/M/yyyy';
      return new InvestorFormModel(
        this.user.firstName,
        this.user.lastName,
        this.user.cellPhoneNumber,
        this.user.officePhoneNumber,
        this.user.address, this.user.email,
        this.datePipe.transform(this.user.birthDate, _shortDate),
        this.user.picture, this.user.company, this.user.role,
        this.datePipe.transform(this.user.joinDate, _shortDate),
        this.user.rank,
        this.user.investorAssociatedProjects,
        this.user.commentsTest, this.user.recruiter
      );
    }
  }

  private _buildForm() {
    this.userForm = this.fb.group({
      firstName: [this.formUser.firstName, [
          Validators.required,
          Validators.minLength(this.us.textmin),
          Validators.maxLength(this.us.userNameMax)
      ]],
      lastName: [this.formUser.lastName,  [
        Validators.required,
        Validators.minLength(this.us.lastNameMin),
        Validators.maxLength(this.us.userNameMax)
      ]],
      address: [this.formUser.address, Validators.required],
      birthDate: [this.formUser.birthDate, Validators.required],
      comments: [this.formUser.commentsTest, Validators.required],
      cellPhoneNumber: [this.formUser.cellPhoneNumber, Validators.required],
      email: [this.formUser.email, [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      rank: [this.formUser.rank, Validators.required],
      role: [this.formUser.role, Validators.required],
      officePhoneNumber: [this.formUser.officePhoneNumber,
        Validators.required],
      joinDate: [this.formUser.joinDate,
        [
          Validators.required,
          Validators.pattern(DATE_REGEX)]
      ],
      recruiter: [this.formUser.recruiter,
        Validators.required],
      company: [this.formUser.company,
        Validators.required],
      city: [null, Validators.required],
      postalCode: [null],
      country: [null],
      userName: [null],
    });

    this.formChangeSubscription = this.userForm
      .valueChanges
      .subscribe(data => {
        this._onValueChanged();
      });
  }

  // Validating input
  // TODO:make sure all fields are being validated and messages are presented properly
  private _onValueChanged() {
    if (!this.userForm) { return; }
    const _setErrorMessage = (control: AbstractControl, errorObject: any, field: string) => {

      if (control && control.dirty && control.invalid) {
        const message = this.us.validationMessages[field];
        for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            errorObject[field] += message[key] + '<br>';
          }
        }
      }
    };
    for (const field in this.formError) {
      if (this.formError.hasOwnProperty(field)) {
        this.formError[field] = '';
        _setErrorMessage(this.userForm.get(field), this.formError, field);
      }
    }

  }


  private _getSubmittedObject() {
    return new InvestorModel(
      this.userForm.get('firstName').value,
      this.userForm.get('lastName').value,
      this.userForm.get('cellPhoneNumber').value,
      this.userForm.get('officePhoneNumber').value,
      this.userForm.get('address').value,
      this.userForm.get('email').value,
     // this.datePipe.transform(this.user.birthDate, _shortDate),
      this.userForm.get('birthDate').value,
      null,
      // this.userForm.get('picture').value,
      this.userForm.get('company').value,
      this.userForm.get('role').value,
     // this.datePipe.transform(this.user.joinDate, _shortDate),
      this.userForm.get('joinDate').value,
      this.userForm.get('rank').value,
      // this.userForm.get('investorAssociatedProjects').value,
      null,
       // this.userForm.get('commentsTest').value,
      null,
      this.userForm.get('recruiter').value
    );
  }
  onSubmit() {
    this.submmiting = true;
    this.submitUserObj = this._getSubmittedObject();
     if (this.isEdit) {
      this.submitUserSub = this.userService.updateUser$(this.user._id, this.submitUserObj).subscribe(
        data => {

          this.notification.showNotification(NOTIF_ALIGNMENT.TOP,  NOTIF_ALIGNMENT.CENTER, NOTIF_TITLE.PROFILE_UPDATE,
            NOTIF_MESSEGAES.SUCCESS_PROFILE_UPDATE,
            NOTIF_TYPE.SUCCESS,
            NOTIF_ICON_TYPE.SUCCESS);
          this._handleSubmitSuccess(data);
        },
        error => {

          this.notification.showNotification(NOTIF_ALIGNMENT.TOP,  NOTIF_ALIGNMENT.CENTER,
            NOTIF_TITLE.ERROR ,
            NOTIF_MESSEGAES.ERROR_PROFILE_UPDATE + ' ' + error,
            NOTIF_TYPE.ERROR, NOTIF_ICON_TYPE.ERROR);
        }
      );
    } else {
       this.submitUserSub = this.userService.addUser$(this.submitUserObj).subscribe(
         data => {
           this.notification.showNotification(NOTIF_ALIGNMENT.TOP,  NOTIF_ALIGNMENT.CENTER, NOTIF_TITLE.PROFILE_ADDED,
             NOTIF_MESSEGAES.SUCCESS_PROFILE_ADDED,
             NOTIF_TYPE.SUCCESS,
             NOTIF_ICON_TYPE.SUCCESS);
           this._handleSubmitSuccess(data);
         },
         error => {

         }
       );
     }
  }

  private _handleSubmitSuccess(res) {
    this.error = false;
    this.submmiting = false;
    // Redirect to event detail
    console.log(res.data._id);
    this.router.navigate(['/user-profile', res.data._id], { relativeTo: this.route });
  }
}
