export type IUser = {
  id?:string;
  name:string;
  login:string;
  password:string;
};

export type UserReturn = Omit<IUser, 'password'>;
