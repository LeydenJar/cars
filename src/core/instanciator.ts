import { CarRepositoryImpl } from "../features/cars/data/repositories/car.repository.impl";
import { CarDetailUsecase } from "../features/cars/domain/usecases/carDetail.usecase";
import { ListCarsUsecase } from "../features/cars/domain/usecases/listCars.usecase";


class Instanciator {

    constructor(){
        this.CarRepository = new CarRepositoryImpl();
        this.CarDetailUsecase = new CarDetailUsecase(this.CarRepository);
        this.ListCarsUsecase = new ListCarsUsecase(this.CarRepository);
    }

    CarRepository: CarRepositoryImpl;
    CarDetailUsecase: CarDetailUsecase;
    ListCarsUsecase: ListCarsUsecase;
}

const instanciator = new Instanciator();
export default instanciator;