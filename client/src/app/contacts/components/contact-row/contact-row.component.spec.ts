import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRowComponent } from './contact-row.component';

describe('ContactRowComponent', () => {
  let component: ContactRowComponent;
  let fixture: ComponentFixture<ContactRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
