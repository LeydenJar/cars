import { DataFailure } from "../../../../core/failures/dataFailure";
import { CarEntity } from "../entities/car.entity";

export abstract class CarRepository {
  abstract getCarById(id: string): Promise<CarEntity | DataFailure>;
  abstract getAll(): Promise<CarEntity[] | DataFailure>;
}
