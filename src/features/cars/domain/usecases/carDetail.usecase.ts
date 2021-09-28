import { CarEntity } from "../entities/car.entity";
import { CarRepository } from "../repositories/car.repository";

export class CarDetailUsecase {

    constructor(carRepository: CarRepository){
        this.carRepository = carRepository;
    }

    private carRepository: CarRepository;

    async call(id: number) : Promise<CarEntity>{
        return await this.carRepository.getCarById(id);
    }

}