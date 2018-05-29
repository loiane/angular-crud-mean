import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ContactRowComponent } from './components/contact-row/contact-row.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './containers/contacts/contacts.component';
import { ContactsTableComponent } from './components/contacts-table/contacts-table.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';
import { ContactsDialogComponent } from './components/contacts-dialog/contacts-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    AppMaterialModule
  ],
  declarations: [ContactsComponent, ContactRowComponent, ContactsTableComponent, ContactsFormComponent, ContactsDialogComponent]
})
export class ContactsModule { }
