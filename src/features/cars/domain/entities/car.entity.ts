export class CarEntity {
  constructor({ id, model, year, airConditioner, eletricWindows, hydraulicSteering, automaticTransmission, mileage  }: ICarEntityInput) {
    this.id = id;
    this.model = model;
    this.year = year;


    this.airConditioner = airConditioner
    this.eletricWindows = eletricWindows
    this.hydraulicSteering = hydraulicSteering
    this.automaticTransmission = automaticTransmission

    this.mileage = mileage
  }

  id: string;
  model: string;
  year: number;

  airConditioner: boolean;
  eletricWindows: boolean;
  hydraulicSteering: boolean;
  automaticTransmission: boolean;

  mileage: number;
}

export interface ICarEntityInput {
  id: string;

  model: string;
  year: number;

  airConditioner: boolean;
  eletricWindows: boolean;
  hydraulicSteering: boolean;
  automaticTransmission: boolean;

  mileage: number;
}
