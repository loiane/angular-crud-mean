import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { ContactsService } from '../services/contacts.service';
import { Observable, of } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactResolver implements Resolve<Contact> {
  constructor(private contactsService: ContactsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Contact> {
    if (route.params != null && route.params.id != null) {
      return this.contactsService.loadById(route.params.id);
    }
    return of({
      _id: null,
      name: null,
      email: null
    });
  }
}
