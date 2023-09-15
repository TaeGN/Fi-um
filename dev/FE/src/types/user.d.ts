export default interface User {
  userId: string;
  password: string;
}

export interface UserDetail extends User {
  userId: string;
  password2: string;
  userName: string;
  phoneNumber: string;
}

export type UserKeyType = keyof UserDetail;
