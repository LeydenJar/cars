import { AuthenticationFailure } from "../../../../core/failures/authenticationFailure";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";
import UserModel from "../schemas/user.schema";

export class UserRepositoryImpl implements UserRepository {
  async saveUser(userData: UserEntity): Promise<UserEntity> {
    const user = UserModel.create(userData);
    return user;
  }

  async getUser(username: string): Promise<UserEntity | AuthenticationFailure> {
    try {
      var user = await UserModel.findOne({ username });
    } catch (err) {
      console.log(err);
      return new AuthenticationFailure({
        code: "auth/user_error",
        message: "Error getting user from database",
      });
    }
    if (user) {
      user as UserEntity;
      return new UserEntity({id: user.id, password: user.password, username: user.username});

    } else {
      return new AuthenticationFailure({
        code: "auth/user_does_not_exist",
        message: "User doesn't exist",
      });
    }
  }
}
