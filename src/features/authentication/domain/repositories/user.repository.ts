import { Failure } from "../../../../core/failures/failure";
import { UserEntity } from "../entities/user.entity";

export abstract class UserRepository {
  abstract saveUser(user: {
    username: string;
    password: string;
  }): Promise<UserEntity | Failure>;
  abstract getUser(username: string): Promise<UserEntity | Failure>;
}
