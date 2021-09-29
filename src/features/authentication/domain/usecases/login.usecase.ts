import { DataFailure } from "../../../../core/failures/dataFailure";
import { Failure } from "../../../../core/failures/failure";
import { Usecase } from "../../../../core/usecases/usecase";
import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

export class LoginUsecase implements Usecase<UserEntity, LoginUsecaseParams> {
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  userRepository: UserRepository;

  async call(params: LoginUsecaseParams): Promise<UserEntity | DataFailure> {
    const repositoryResponse = await this.userRepository.getUser(
      params.username
    );
    if (repositoryResponse instanceof Failure) {
      return repositoryResponse;
    }
    repositoryResponse as UserEntity;
    //Verify password
    const isPasswordValid = await repositoryResponse.validatePassword(
      params.password
    );
    console.log("!!!!! ispassValid? !!!!!!!");
    console.log(isPasswordValid);
    // isPasswordValid = bcrypt.compare(pass, this.password);
    return new UserEntity("gsjdfhg", "gbkjdfhbg");

    // return { isPasswordValid };
  }
}

interface LoginUsecaseParams {
  username: string;
  password: string;
}
