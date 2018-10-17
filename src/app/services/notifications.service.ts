import {Injectable} from '@angular/core';
declare var $: any;
@Injectable()
export class NotificationsService {
  constructor() {
  }
  showNotification(from, align,  title, message, notificationType, icon) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    const color = Math.floor((Math.random() * 4) + 1);
  console.log(icon);

    $.notify({
      type: notificationType,
       title: `<strong>${title}</strong>`,
      message:  message
    },
      {
        // settings
        element: 'body',
        position: null,
        type: 'success',
        allow_dismiss: true,
        newest_on_top: true,
        showProgressbar: false,
        placement: {
          from: from,
          align: align
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5000,
        timer: 4000,
        url_target: '_blank',
        mouse_over: null,
        animate: {
          enter: 'animated fadeInDown',
          exit: 'animated fadeOutUp'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,

         template: `<div 
        data-notify="container"
        class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-${notificationType} alert-with-icon"
        role="alert">
        <button mat-button
        type="button"
        aria-hidden="true"
        class="close mat-button"
        data-notify="dismiss">
        <i class="material-icons">close</i></button>
        <i class="material-icons"
        data-notify="icon">${icon}</i>
        <span data-notify="title" >{1}</span>
        <!--<span data-notify="message" style="text-align: right">{2}</span>-->
        <div  data-notify="message">{2}</div>
        <div class="progress"
        data-notify="progressbar">
        <div class="progress-bar progress-bar-{0}"
        role="progressbar"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
        style="width: 0%;"></div>
        </div>
        <a href="{3}" target="{4}" data-notify="url"></a>
       </div>`
    });
  }
}
