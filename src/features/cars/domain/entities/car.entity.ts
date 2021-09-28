export class CarEntity {
    constructor(model: string, year: number){
        this.model = model;
        this.year = year;
    }

    model: string;
    year: number;
}

export interface ICarEntity{
    model: string;
    year: number;
}