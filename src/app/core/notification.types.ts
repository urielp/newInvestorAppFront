 const NOTIF_TYPE =  {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning',
  DANGER: 'danger'
};

const NOTIF_ICON_TYPE =  {
  SUCCESS: 'done',
  ERROR: 'error_outline',
  INFO: 'info',
  WARNING: 'notification_important',
  DANGER: 'warning'
};

 const NOTIF_MESSEGAES =  {
   SUCCESS_PROFILE_UPDATE: 'פרופיל עודכן בהצלחה',
   SUCCESS_PROFILE_ADDED: 'פרופיל עודכן בהצלחה',
   ERROR_PROFILE_UPDATE: 'קרתה שגיאה,עדכון פרופיל נכשל',
   GENERAL_UPDATE: 'בוצע עדכון לנתונים.\nייתכן יידרש רענון לדף',
   WARNING: 'נתונים נשלחו אך ייתכן וחסרים פרטים'
 };
 const NOTIF_TITLE =  {
   PROFILE_UPDATE: 'עדכון פרופיל',
   GENERAL_UPDATE: 'התקבל עדכון',
   PROFILE_ADDED: 'פרופיל חדש התווסף',
   ERROR: 'ארעה שגיאה'

 };

 const NOTIF_ALIGNMENT = {
   TOP: 'top',
   BOTTOM: 'bottom',
   LEFT: 'left',
   RIGHT: 'right',
   CENTER: 'center'
 };
export {NOTIF_TYPE, NOTIF_ICON_TYPE, NOTIF_MESSEGAES, NOTIF_TITLE, NOTIF_ALIGNMENT};
