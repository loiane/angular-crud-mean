import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Contact } from '../../model/contact';
import { ContactsService } from '../../services/contacts.service';
import { ErrorDialogComponent } from './../../../shared/error-dialog/error-dialog.component';
import { ContactsDialogComponent } from './../../components/contacts-dialog/contacts-dialog.component';

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
    this.contacts$ = this.contactsService.list()
    .pipe(catchError(error => {
      this.onError();
      return of([]);
    }));
  }

  onError() {
    this.dialog.open(ErrorDialogComponent, {
      data: 'Error while trying to save the information.'
    });
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
    this.router.navigate(['edit', record._id], { relativeTo: this.route });
  }

  onRemove(record: Contact) {

  }

}
