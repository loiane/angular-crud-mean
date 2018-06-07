import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Contact } from '../../model/contact';
import { ContactsService } from '../../services/contacts.service';
import { ConfirmationDialogComponent } from './../../../shared/confirmation-dialog/confirmation-dialog.component';
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
    private snackBar: MatSnackBar,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.contacts$ = this.contactsService.list().pipe(
      catchError(error => {
        this.onError('Error while trying to save the information.');
        return of([]);
      })
    );
  }

  onError(message: String) {
    this.dialog.open(ErrorDialogComponent, {
      data: message
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
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Are you sure you want to delete this record?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactsService
          .remove(record._id)
          .subscribe(
            () => {
              this.refresh();
              this.snackBar.open('Record removed successfully!', 'X', {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
              });
            },
            error => this.onError('Error while trying to delete the record.')
          );
      }
    });
  }
}
