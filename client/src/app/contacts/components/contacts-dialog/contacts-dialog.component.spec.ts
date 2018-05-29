import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDialogComponent } from './contacts-dialog.component';

describe('ContactsDialogComponent', () => {
  let component: ContactsDialogComponent;
  let fixture: ComponentFixture<ContactsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
