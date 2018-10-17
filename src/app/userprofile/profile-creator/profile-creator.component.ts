import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-creator.component.html',
  styleUrls: ['./profile-creator.component.scss']
})
export class ProfileCreatorComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: [null],
      lastName: [null],
      address:  [null],
      birthDate:  [null],
      comments:  [null],
      cellPhone:  [null],
      email:  [null],
      rank:  [null],
      role:  [null],
      officePhoneNumber: [null],
      joinDate:  [null],
      recruiter:  [null],
      company: [{value: '', disabled: true }],
      city:  [null],
      postalCode:  [null],
      country:  [null],
      userName: [null],
    });
  }
  onSubmit() {
    console.warn(this.profileForm.value);
    console.log(this.profileForm.touched) ;
  }
}
