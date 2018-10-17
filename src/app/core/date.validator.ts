import {AbstractControl,ValidatorFn} from '@angular/forms';
import {DATE_REGEX} from './formsUtils.factory';

export function dateValidator(): ValidatorFn {
return (control: AbstractControl): { [key: string]: any} => {
  const dateStr = control.value;
  if (!DATE_REGEX.test(dateStr)) {
    return null;
  }
  // length of months
  const monthLengthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // Object return if date is invalid
  const invalidObject = {'date': true};
  // Parse the date input to integers
  const dateArr = dateStr.split('/');
  const month = parseInt(dateArr[1], 10);
  const day = parseInt(dateArr[0], 10);
  const year = parseInt(dateArr[2], 10);
  const now = new Date();
  // validate year and month
  if (year > 3000 || month === 0 || month > 12) {
    return invalidObject;
  }
  // Adjust for leap years
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    monthLengthArr[1] = 29;
  }
  // validate date
  const  date = new Date(dateStr);
  return null;
};
}
