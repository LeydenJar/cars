import { AuthenticationFailure } from "../../../../core/failures/authenticationFailure";
import { instanceOfFailure } from "../../../../core/failures/failure";
import { Usecase } from "../../../../core/usecases/usecase";
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
  ): Promise<RegisterReturn | AuthenticationFailure> {
    //Verify if user already exists
    const userThatMayAlreadyExists = await this.userRepository.getUser(
      params.username
    );

    if (!instanceOfFailure(userThatMayAlreadyExists)) {
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
