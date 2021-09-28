import { CarEntity } from "../entities/car.entity";

export abstract class CarRepository {
    abstract getCarById(id: number): Promise<CarEntity>;
    abstract getAll(): Promise<CarEntity[]>;
}