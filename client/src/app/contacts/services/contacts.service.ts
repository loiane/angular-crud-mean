import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private API = 'api/contacts';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Contact[]>(this.API);
  }
}
