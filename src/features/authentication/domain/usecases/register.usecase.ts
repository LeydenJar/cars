import { AuthenticationFailure } from "../../../../core/failures/authenticationFailure";
import { DataFailure } from "../../../../core/failures/dataFailure";
import { Usecase } from "../../../../core/usecases/usecase";
import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

export class RegisterUsecase
  implements Usecase<RegisterReturn, RegisterUsecaseParams>
{
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  userRepository: UserRepository;

  async call(
    params: RegisterUsecaseParams
  ): Promise<RegisterReturn | DataFailure> {
    //Verify if user already exists
    const userThatMayAlreadyExists = await this.userRepository.getUser(
      params.username
    );

    if (!(userThatMayAlreadyExists instanceof DataFailure)) {
      return new AuthenticationFailure({
        message: "Username already taken",
        code: "auth/username_taken",
      });
    }
    try {
      await this.userRepository.saveUser(params);
      return { success: true };
    } catch (err) {
      return new AuthenticationFailure({
        code: "auth/error_registering_user",
        message: "Couldn't register user",
      });
    }
  }
}

interface RegisterUsecaseParams {
  username: string;
  password: string;
}

interface RegisterReturn {
  success: boolean;
}
