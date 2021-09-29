import { DataFailure } from "../../../../core/failures/dataFailure";
import { Usecase } from "../../../../core/usecases/usecase";
import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

export class RegisterUsecase
  implements Usecase<UserEntity, RegisterUsecaseParams>
{
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  userRepository: UserRepository;

  async call(params: RegisterUsecaseParams): Promise<UserEntity | DataFailure> {
    const user = await this.userRepository.saveUser(params);
    return user;
  }
}

interface RegisterUsecaseParams {
  username: string;
  password: string;
}
