import { IFriend } from "./IFriend";

export interface IApplication {
  id: number;
  date: string;
  firstName: string;
  surname: string;
  age: string;
  city: string;
  email: string;
  phone: string;
  sum: number;
  friends: IFriend[];
}
