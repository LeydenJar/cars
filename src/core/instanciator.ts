import { UserRepositoryImpl } from "../features/authentication/data/repositories/user.repository.impl";
import { UserRepository } from "../features/authentication/domain/repositories/user.repository";
import { LoginUsecase } from "../features/authentication/domain/usecases/login.usecase";
import { RegisterUsecase } from "../features/authentication/domain/usecases/register.usecase";
import { CarRepositoryImpl } from "../features/cars/data/repositories/car.repository.impl";
import { CarDetailUsecase } from "../features/cars/domain/usecases/carDetail.usecase";
import { ListCarsUsecase } from "../features/cars/domain/usecases/listCars.usecase";

class Instanciator {
  constructor() {
    this.CarRepository = new CarRepositoryImpl();
    this.CarDetailUsecase = new CarDetailUsecase(this.CarRepository);
    this.ListCarsUsecase = new ListCarsUsecase(this.CarRepository);

    this.UserRepository = new UserRepositoryImpl();
    this.LoginUsecase = new LoginUsecase(this.UserRepository);
    this.RegisterUseCase = new RegisterUsecase(this.UserRepository);
  }

  CarRepository: CarRepositoryImpl;
  CarDetailUsecase: CarDetailUsecase;
  ListCarsUsecase: ListCarsUsecase;

  UserRepository: UserRepository;
  LoginUsecase: LoginUsecase;
  RegisterUseCase: RegisterUsecase;
}

const instanciator = new Instanciator();
export default instanciator;
