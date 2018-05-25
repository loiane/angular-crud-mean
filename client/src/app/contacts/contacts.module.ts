import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ContactRowComponent } from './components/contact-row/contact-row.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './containers/contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    AppMaterialModule
  ],
  declarations: [ContactsComponent, ContactRowComponent]
})
export class ContactsModule { }
