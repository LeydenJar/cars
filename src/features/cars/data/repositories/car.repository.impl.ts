import { DataFailure } from "../../../../core/failures/dataFailure";
import { CarEntity } from "../../domain/entities/car.entity";
import { CarRepository } from "../../domain/repositories/car.repository";
import CarModel from "../schemas/car.schema";

export class CarRepositoryImpl implements CarRepository {
  async getAll(): Promise<CarEntity[]> {
    const carsDocs = await CarModel.find();
    const cars = carsDocs.map((carDoc) => {
      const { id, model, year, airConditioner, eletricWindows, hydraulicSteering, automaticTransmission, mileage} = carDoc;
      return new CarEntity({ id, model, year, airConditioner, eletricWindows, hydraulicSteering, automaticTransmission, mileage});
    });
    return cars;
  }

  async getCarById(id: string): Promise<CarEntity | DataFailure> {
    try {
      const carDoc = await CarModel.findById(id);
      if (carDoc) {
        const { id, model, year, airConditioner, eletricWindows, hydraulicSteering, automaticTransmission, mileage} = carDoc;
      return new CarEntity({ id, model, year, airConditioner, eletricWindows, hydraulicSteering, automaticTransmission, mileage});
      } else {
        return new DataFailure({
          code: "data/car_doeasn't_exist",
          message: "This car doesn't exist",
        });
      }
    } catch (err) {
      console.log(err);
      return new DataFailure({
        code: "car/failure_taking_car_from_database",
        message: "failure taking car from database",
      });
    }
  }
}
