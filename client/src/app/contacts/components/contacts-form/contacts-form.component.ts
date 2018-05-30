import { Contact } from './../../model/contact';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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
  phones: any = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    const contact = this.route.snapshot.data['contact'];

    this.form = this.formBuilder.group({
      // _id: [contact._id],
      name: [contact.name, [Validators.required, Validators.maxLength(200)]],
      email: [contact.email, [Validators.required, Validators.email]],
      phones: this.formBuilder.array([ this.createPhone() ])
    });
  }

  createPhone(): FormGroup {
    return this.formBuilder.group({
      areaCode: [null],
      phoneNumber: [null]
    });
  }

  addPhone(): void {
    this.phones = this.form.get('phones') as FormArray;
    this.phones.push(this.createPhone());
  }

  isFieldValid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSumitAttempt === true)
    );
  }

  markFieldTouched() {
    this.form.get('email').markAsTouched();
    this.form.get('name').markAsTouched();
  }

  onSubmit() {
    this.formSumitAttempt = true;
    this.markFieldTouched();
    if (this.form.valid) {
      this.contactsService.save(this.form.value).subscribe(data => this.onCancel());
    }
  }

  onCancel() {
    this.formSumitAttempt = false;
    this.location.back();
  }
}
