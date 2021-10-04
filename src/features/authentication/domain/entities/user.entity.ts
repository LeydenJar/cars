import bcrypt from "bcrypt";

export class UserEntity {
  constructor({username, password, id}: IUserEntityInput) {
    this.id = id;
    this.username = username;
    this.password = password;
  }

  id: string;
  username: string;
  password: string;
  validatePassword = (pass: string) => bcrypt.compare(pass, this.password);
}

export interface IUserEntityInput {
  id: string;
  username: string;
  password: string;
}
