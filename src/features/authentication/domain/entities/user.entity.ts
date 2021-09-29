import bcrypt from "bcrypt";

export class UserEntity {
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  username: string;
  password: string;
  validatePassword = (pass: string) => bcrypt.compare(pass, this.password);
}
