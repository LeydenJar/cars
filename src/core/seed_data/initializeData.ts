import CarModel from "../../features/cars/data/schemas/car.schema";

/* 

Helper function for the technical test

*/
export async function initializeData(): Promise<void> {
  const cars = await CarModel.find();
  if(!cars.length){
    await CarModel.create([
      { model: "Astra", year: 2000, airConditioner: true, eletricWindows: true, hydraulicSteering: true, automaticTransmission: false, mileage: 100000 },
      { model: "Vectra", year: 2002, airConditioner: true, eletricWindows: true, hydraulicSteering: false, automaticTransmission: false, mileage: 128000 },
      { model: "Audi A5", year: 2016, airConditioner: true, eletricWindows: true, hydraulicSteering: true, automaticTransmission: true, mileage: 75000 },
      { model: "Fiat Prêmio", year: 1990, airConditioner: false, eletricWindows: false, hydraulicSteering:false, automaticTransmission: false, mileage: 300000 },
      { model: "Fiat Strada", year: 1998, airConditioner: false, eletricWindows: false, hydraulicSteering:false, automaticTransmission: false, mileage: 230000 },
    ]);
  }
}
