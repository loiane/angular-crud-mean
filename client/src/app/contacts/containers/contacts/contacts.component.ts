import { ContactsDialogComponent } from './../../components/contacts-dialog/contacts-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
    private dialog: MatDialog,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    this.contacts$ = this.contactsService.list();
  }

  onDetails(record: Contact) {
    this.dialog.open(ContactsDialogComponent, {
      data: record
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(record: Contact) {
    this.router.navigate(['edit', record.name], { relativeTo: this.route });
  }

  onRemove(record: Contact) {

  }

}
