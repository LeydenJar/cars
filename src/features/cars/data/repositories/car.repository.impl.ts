import { CarEntity } from "../../domain/entities/car.entity";
import { CarRepository } from "../../domain/repositories/car.repository";

export class CarRepositoryImpl implements CarRepository {
    async getAll(): Promise<CarEntity[]>{
        return [new CarEntity("Maverik", 1987), new CarEntity("Vectra", 2002)]
    }

    async getCarById(id: number): Promise<CarEntity>{
        return new CarEntity("Gol", 2000);
    }
}