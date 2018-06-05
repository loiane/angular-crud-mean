import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

import { Phone } from '../../model/phone';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from './../../model/contact';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {
  form: FormGroup;
  phones: any = [];
  matcher = new MyErrorStateMatcher();

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

  isFieldRequired(field: string) {
    return this.form.get(field).hasError('required');
  }

  isEmailValid(field: string) {
    return this.form.get(field).hasError('email') && !this.form.get(field).hasError('required');
  }

  isFormArrayValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  getFormArrayClass(field: string) {
    return this.isFormArrayValid(field) ? 'form-array-color-error' : '' ;
  }

  /* markFieldTouched() {
    this.form.get('email').markAsTouched();
    this.form.get('name').markAsTouched();
    this.form.get('phones').markAsTouched();
  } */

  validateAllFormFields(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        control.markAsTouched({ onlySelf: true });
        this.validateAllFormFields(control);
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.contactsService.save(this.form.value).subscribe(data => this.onCancel(), error => console.log(error));
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  onCancel() {
    this.location.back();
  }
}
