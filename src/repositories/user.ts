import DataSource from "../loaders/db";
import { User } from "../models/user.entity";
import { Repository } from "typeorm";

class UserRepository {
  private user: Repository<User>;

  constructor() {
    this.user = DataSource.getRepository(User);
  }

  public async findOne(params = {}) {
    return await this.user.findOneBy(params);
  }

  public async create(params: User) {
    return await this.user.save(params);
  }

  public async updateById(id: number, params: User) {
    return await this.user.update(id, params);
  }

  public async updateByEmail(email: string, params: User) {
    return await this.user.update(email, params);
  }

  public async delete(id: number) {
    return await this.user.delete(id);
  }
}

export default new UserRepository();
