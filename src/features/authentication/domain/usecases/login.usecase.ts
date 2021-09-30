import { AuthenticationFailure } from "../../../../core/failures/authenticationFailure";

import { Failure, instanceOfFailure } from "../../../../core/failures/failure";
import { Usecase } from "../../../../core/usecases/usecase";
import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";
import jwt from "jsonwebtoken";
import { config } from "../../../../core/config/config";

export class LoginUsecase implements Usecase<LoginReturn, LoginUsecaseParams> {
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  userRepository: UserRepository;

  async call(
    params: LoginUsecaseParams
  ): Promise<LoginReturn | AuthenticationFailure> {
    const repositoryResponse = await this.userRepository.getUser(
      params.username
    );
    if (instanceOfFailure(repositoryResponse)) {
      return repositoryResponse;
    }

    repositoryResponse as UserEntity;
    //Verify password
    const isPasswordValid = await repositoryResponse.validatePassword(
      params.password
    );

    var response = isPasswordValid
      ? {
          token: jwt.sign(
            { username: repositoryResponse.username },
            config.app.tokenSecret,
            {
              expiresIn: "1h",
            }
          ),
        }
      : new AuthenticationFailure({
          message: "Problem in authentication",
          code: "auth/invalid_credentials",
        });

    return response;
  }
}

interface LoginUsecaseParams {
  username: string;
  password: string;
}

interface LoginReturn {
  token: string;
}
