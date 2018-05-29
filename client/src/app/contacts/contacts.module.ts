import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ContactsDialogComponent } from './components/contacts-dialog/contacts-dialog.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';
import { ContactsTableComponent } from './components/contacts-table/contacts-table.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './containers/contacts/contacts.component';

@NgModule({
  imports: [CommonModule, ContactsRoutingModule, AppMaterialModule],
  declarations: [
    ContactsComponent,
    ContactsTableComponent,
    ContactsFormComponent,
    ContactsDialogComponent
  ],
  entryComponents: [ContactsDialogComponent]
})
export class ContactsModule {}
