
const DATE_REGEX = new RegExp(/^(\d{2}|\d)\/(\d{2}|\d)\/\d{4}$/);
const EMAIL_REGEX = new RegExp( /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

function stringToDate(dateStr: string) {
  if (!DATE_REGEX.test(dateStr)) {
    console.error('cannot covert date');
    return;
  }
  const date = new Date(dateStr);
  return date;
}
export {DATE_REGEX, EMAIL_REGEX, stringToDate};


