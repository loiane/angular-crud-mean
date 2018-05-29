import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Contact } from '../../model/contact';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {

  @Input() contacts: Contact[];
  @Output() details: EventEmitter<Contact> = new EventEmitter(false);
  @Output() edit: EventEmitter<Contact> = new EventEmitter(false);
  @Output() remove: EventEmitter<Contact> = new EventEmitter(false);

  displayedColumns = ['name', 'email', 'actions'];

  constructor() { }

  ngOnInit() {
  }

  onDetails(record: Contact) {
    this.details.emit(record);
  }

  onAdd() {

  }

  onEdit(record: Contact) {
    this.edit.emit(record);
  }

  onRemove(record: Contact) {
    this.remove.emit(record);
  }

}
