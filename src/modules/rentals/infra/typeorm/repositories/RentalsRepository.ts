import { getRepository, Repository } from 'typeorm';

import { ICreateRentalDTO } from '@modules/rentals/dtos/ICreateRentalDTO';
import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository';

import { Rental } from '../entities/Rental';

class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }

  async create({
    car_id,
    expected_return_date,
    user_id,
  }: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create({
      car_id,
      expected_return_date,
      user_id,
    });

    await this.repository.save(rental);

    return rental;
  }

  async findOpenRentalsByUserId(user_id: string): Promise<Rental[]> {
    return this.repository.find({
      where: {
        user_id,
      },
    });
  }

  async findOpenRentalsByCarId(car_id: string): Promise<Rental[]> {
    return this.repository.find({
      where: {
        car_id,
      },
    });
  }
}

export { RentalsRepository };
