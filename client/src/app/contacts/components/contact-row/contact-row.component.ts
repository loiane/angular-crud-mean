import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Contact } from '../../model/contact';

@Component({
  selector: 'app-contact-row',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.scss']
})
export class ContactRowComponent {

  @Input() contact: Contact;
  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() edit: EventEmitter<any> = new EventEmitter(false);

  constructor() { }

  onEdit() {
  }

  onRemove() {
    this.remove.emit();
  }

}
