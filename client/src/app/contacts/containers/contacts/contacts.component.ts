import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, tap } from 'rxjs/operators';

import { Contact } from '../../model/contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  isLoadingResults = true;
  displayedColumns = ['name', 'email', 'actions'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    this.contactsService.list()
      .pipe(
        take(1),
        tap(data => this.isLoadingResults = false)
      )
      .subscribe(data =>  this.contacts = data);
  }
}
