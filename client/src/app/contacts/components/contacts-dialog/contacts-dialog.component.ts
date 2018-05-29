import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Contact } from '../../model/contact';

@Component({
  selector: 'app-contacts-dialog',
  templateUrl: './contacts-dialog.component.html',
  styleUrls: ['./contacts-dialog.component.scss']
})
export class ContactsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContactsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

}
