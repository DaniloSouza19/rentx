import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { IListAvailableCarsDTO } from '../dtos/IListAvailableCarsDTO';
import { Car } from '../infra/typeorm/entities/Car';

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findCarByLicensePlate(license_plate: string): Promise<Car>;
  findAvailable(data: IListAvailableCarsDTO): Promise<Car[]>;
  findById(car_id: string): Promise<Car>;
  setAvailable(car_id: string, isAvailable: boolean): Promise<void>;
}

export { ICarsRepository };
