import { DataFailure } from "../../../../core/failures/dataFailure";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";
import UserModel from "../schemas/user.schema";

export class UserRepositoryImpl implements UserRepository {
  async saveUser(userData: UserEntity): Promise<UserEntity> {
    const user = UserModel.create(userData);
    return user;
  }

  async getUser(username: string): Promise<UserEntity | DataFailure> {
    // return new UserEntity("Gol", 2000);
    try {
      var User = await UserModel.findOne({ username });
    } catch (err) {
      console.log(err);
      return new DataFailure({
        code: "data/UserFailure",
        message: "Couldn't take User from database",
      });
    }
    if (User) {
      User as UserEntity;
      return User;
    } else {
      return new DataFailure({
        code: "data/UserFailure",
        message: "Couldn't take User from database",
      });
    }
  }
}
