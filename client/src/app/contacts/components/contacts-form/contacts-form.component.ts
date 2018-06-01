import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Phone } from '../../model/phone';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from './../../model/contact';

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
      _id: [contact._id],
      name: [contact.name, [Validators.required, Validators.maxLength(200)]],
      email: [contact.email, [Validators.required, Validators.email]],
      phones: this.formBuilder.array(this.retrievePhones(contact), Validators.required)
    });
  }

  minLengthArray(min: number) {
    return (c: AbstractControl): { [key: string]: any } => {
      if (c.value.length >= min) { return null; }

      return { minLengthArray: { valid: false } };
    };
  }

  getPhoneFormArray() {
    return (<FormArray>this.form.get('phones')).controls;
  }

  retrievePhones(contact: Contact) {
    const phones = [];
    if (contact && contact.phones) {
      contact.phones.forEach(phone => phones.push(this.createPhone(phone)));
    } else {
      phones.push(this.createPhone());
    }
    return phones;
  }

  createPhone(phone: Phone = { areaCode: null, phoneNumber: null }): FormGroup {
    return this.formBuilder.group({
      areaCode: [
        phone.areaCode,
        [Validators.required, Validators.maxLength(3), Validators.minLength(3)]
      ],
      phoneNumber: [
        phone.phoneNumber,
        [Validators.required, Validators.maxLength(7), Validators.minLength(7)]
      ]
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
