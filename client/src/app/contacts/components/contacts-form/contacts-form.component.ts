import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {
  private formSumitAttempt = false;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    const contact = this.route.snapshot.data['contact'];

    this.form = this.formBuilder.group({
      _id: [contact._id],
      name: [contact.name, Validators.required],
      email: [contact.email, Validators.required],
      phone: [contact.phone]
    });
  }

  isFieldValid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSumitAttempt === true)
    );
  }

  onSubmit() {
    this.formSumitAttempt = true;
    if (this.form.valid) {
      this.contactsService.save(this.form.value).subscribe(data => this.onCancel());
    }
  }

  onCancel() {
    this.formSumitAttempt = false;
    this.location.back();
  }
}
