import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar layout-align="center center" color="primary">
    <h1>My Contacts</h1>
  </mat-toolbar>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {}
