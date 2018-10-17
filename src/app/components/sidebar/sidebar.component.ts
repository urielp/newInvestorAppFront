import { Component, OnInit } from '@angular/core';


declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'דף הבית',  icon: 'home', class: '' },
    { path: '/user-profile', title: 'פרופיל משתמש',  icon:'person', class: '' },
    { path: '/table-list', title: 'רשימת טבלאות',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'טיפוגרפיה',  icon:'library_books', class: '' },
    { path: '/icons', title: 'אייקונים',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'מפות',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'הודעות',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
}
}
