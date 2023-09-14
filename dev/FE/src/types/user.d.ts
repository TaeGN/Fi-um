export default interface User {
  id: string;
  password: string;
}

export interface UserDetail extends User {
  id: string;
  password2: string;
  name: string;
  phonenumber: string;
}

export type UserKeyType = keyof UserDetail;
