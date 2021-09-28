import { CarEntity } from "../entities/car.entity";
import { CarRepository } from "../repositories/car.repository";

export class ListCarsUsecase {
    constructor(carRepository: CarRepository){
        this.carRepository = carRepository;
    }

    private carRepository: CarRepository;

    async call() : Promise<CarEntity[]>{
        return await this.carRepository.getAll();
    }
}