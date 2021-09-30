import CarModel from "../../features/cars/data/schemas/car.schema";

/* 

Helper function for the technical test

*/
export async function initializeData(): Promise<void> {
  await CarModel.create([
    { model: "Astra", year: 2000 },
    { model: "Vectra", year: 2002 },
  ]);
}
