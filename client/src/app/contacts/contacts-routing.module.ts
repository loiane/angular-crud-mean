import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './containers/contacts/contacts.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';

const routes: Routes = [
  { path: '', component: ContactsComponent },
  { path: 'new', component: ContactsFormComponent },
  { path: 'edit/:id', component: ContactsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
