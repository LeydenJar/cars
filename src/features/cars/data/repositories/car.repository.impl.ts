import { DataFailure } from "../../../../core/failures/dataFailure";
import { CarEntity } from "../../domain/entities/car.entity";
import { CarRepository } from "../../domain/repositories/car.repository";
import CarModel from "../schemas/car.schema";

export class CarRepositoryImpl implements CarRepository {
  async getAll(): Promise<CarEntity[]> {
    // return [new CarEntity("Maverik", 1987), new CarEntity("Vectra", 2002)]

    const cars = CarModel.find();
    return cars;
  }

  async getCarById(id: string): Promise<CarEntity | DataFailure> {
    // return new CarEntity("Gol", 2000);
    try {
      var car = await CarModel.findById(id);
    } catch (err) {
      console.log(err);
      return new DataFailure({
        code: "data/carFailure",
        message: "Couldn't take car from database",
      });
    }
    if (car) {
      car as CarEntity;
      return car;
    } else {
      console.log("All Valid");
      return new DataFailure({
        code: "data/carFailure",
        message: "Couldn't take car from database",
      });
    }
  }
}
