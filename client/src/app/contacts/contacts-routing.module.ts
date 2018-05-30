import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';
import { ContactsComponent } from './containers/contacts/contacts.component';
import { ContactResolver } from './guards/contact.resolver';

const routes: Routes = [
  { path: '', component: ContactsComponent },
  {
    path: 'new',
    component: ContactsFormComponent,
    resolve: {
      contact: ContactResolver
    }
  },
  {
    path: 'edit/:id',
    component: ContactsFormComponent,
    resolve: {
      contact: ContactResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule {}
