import { ContactsModule } from './contacts.module';

describe('ContactsModule', () => {
  let contactsModule: ContactsModule;

  beforeEach(() => {
    contactsModule = new ContactsModule();
  });

  it('should create an instance', () => {
    expect(contactsModule).toBeTruthy();
  });
});
