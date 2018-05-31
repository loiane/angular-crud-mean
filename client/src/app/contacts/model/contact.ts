import { Phone } from './phone';

export interface Contact {
  _id: string;
  name: string;
  email: string;
  phones?: Phone[];
}
