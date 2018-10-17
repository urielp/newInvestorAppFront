import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  validationMessages: any;
  formErrors = {
    company: '',
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    role: '',
    birthDate: '',
    address: '',
    phone: '',
    cellPhoneNumber: ' ',
    city: '',
    state: '',
    postalCode: '',
    recruiter: '',
    joinDate: '',
    comments: ''
  };
  // min/max length
  lastNameMin=2;
  textmin = 3;
  titleMax = 36;
  userNameMax = 12;
  dateMax = 10;
  commentMax = 2000;
  private myStrongMessge = 'חובה';
  // Formats
  dateFormat = 'd/m/yyyy';
  constructor() {
    // TODO : finish fields validation messages
    this.validationMessages = {
      company: {
        required: `חובה להזין שם חברה`,
      },
      userName: {
        required: `User name is <strong>required</strong>`,
        minlength: `User name be ${this.textmin} characters or more.` ,
        maxlength: `User name be ${this.userNameMax} characters or lss.`
      },
      email: {
        required: `חובה להזין כתובת אימייל`,
        pattern: `כתובת אימייל חייבת להיות תקינה`
      },
      firstName: {
        required: `חובה להזין שם פרטי`,
        minlength: `שם פרטי חייב להיות ${this.textmin}  אותיות או יותר `,
        maxlength: `שם פרטי לא יכול להיות יותר מ ${this.userNameMax}  אותיות `
      },
      lastName: {
        required: `חובה להזין שם משפחה`,
        minlength: `שם משפחה חייב להכיל לפחות ${this.lastNameMin} תווים `  ,
        maxlength: ` שם משפחה לא יכול להכיל יותר מ ${this.userNameMax}`
      },
      joinDate: {
        required: 'חובה להזין תאריך הצטרפות',
        pattern: 'פורמט תאריך אינו תקין'
      },
      cellPhoneNumber: {
        required: 'חובה להזין מספר סלולרי'
      }
    };
  }
}
