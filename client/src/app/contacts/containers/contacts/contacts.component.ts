import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Contact } from '../../model/contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts$: Observable<Contact[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    this.contacts$ = this.contactsService.list();
  }
}
