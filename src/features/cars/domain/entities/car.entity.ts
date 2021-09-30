export class CarEntity {
  constructor({ model, year, id }: ICarEntityInput) {
    this.id = id;
    this.model = model;
    this.year = year;
  }

  id: string;
  model: string;
  year: number;
}

export interface ICarEntityInput {
  id: string;
  model: string;
  year: number;
}
