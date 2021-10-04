import { Schema, model } from "mongoose";
import { CarEntity } from "../../domain/entities/car.entity";

const carSchema: Schema = new Schema<CarEntity>({
    model: {type: String, required: true},
    year: {type: Number, required: true},

    airConditioner: {type: Boolean, required: true},
    eletricWindows: {type: Boolean, required: true},
    hydraulicSteering: {type: Boolean, required: true},
    automaticTransmission: {type: Boolean, required: true},

    mileage: {type: Number, required: true},
});


const CarModel = model<CarEntity>('Car', carSchema);

export default CarModel;