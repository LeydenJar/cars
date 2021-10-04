import bcrypt from "bcryptjs";

export class UserEntity {
  constructor({username, password, id}: IUserEntityInput) {
    this.id = id;
    this.username = username;
    this.password = password;
  }

  id: string;
  username: string;
  password: string;
  validatePassword = (pass: string) => bcrypt.compareSync(pass, this.password);
}

export interface IUserEntityInput {
  id: string;
  username: string;
  password: string;
}
