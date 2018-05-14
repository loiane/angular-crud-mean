import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'contacts', loadChildren: 'app/contacts/contacts.module#ContactsModule' },
  { path: '', pathMatch: 'full', redirectTo: 'contacts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
