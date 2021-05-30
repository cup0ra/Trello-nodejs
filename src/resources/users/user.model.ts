import { v4 as uuidv4 } from 'uuid';
import { UserReturn, IUser } from './model';

class User implements IUser {
  constructor(
    public name = 'USER',
    public login = 'user',
    public password = 'P@55w0rd',
    public id = uuidv4(),
  ) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: IUser): UserReturn {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
