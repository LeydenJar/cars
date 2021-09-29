import { Failure } from "../../../../core/failures/failure";
import { CarEntity } from "../entities/car.entity";
import { CarRepository } from "../repositories/car.repository";

export class CarDetailUsecase {
  constructor(carRepository: CarRepository) {
    this.carRepository = carRepository;
  }

  private carRepository: CarRepository;

  async call(id: string): Promise<CarEntity | Failure> {
    return await this.carRepository.getCarById(id);
  }
}
