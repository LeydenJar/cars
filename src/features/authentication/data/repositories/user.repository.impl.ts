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
      return new UserEntity({id: User.id, password: User.password, username: User.username});

    } else {
      return new DataFailure({
        code: "data/UserFailure",
        message: "Couldn't take User from database",
      });
    }
  }
}
