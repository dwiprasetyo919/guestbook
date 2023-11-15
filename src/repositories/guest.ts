import DataSource from "../loaders/db";
import { Guest } from "../models/guest.entity";
import { Repository } from "typeorm";

export interface IGuest {
  id?: string;
  name: string;
  note: string;
}
export interface IGuestPaginate {
  docs: Array<IGuest>;
}

class GuestRepository {
  private guest: Repository<Guest>;

  constructor() {
    this.guest = DataSource.getRepository(Guest);
  }

  public async findOne(params = {}) {
    return await this.guest.findOneBy(params);
  }

  public async create(params: Guest) {
    return await this.guest.save(params);
  }

  public async count(search={}){
    const options: any = {
      where: search,
      relations: []
    };
    return await this.guest.count(options);
  }

  public async search(params: any): Promise<IGuestPaginate>{
    const { page, search, sort, take, skip, totalDocs, totalPages, limit } = params;
    const options: any = {
      where: search,
      relations: [],
      order: sort,
      take,
      skip
    };
    
    const docs = await this.guest.find(options);
    
    const docsResult = [];
    for (const item of docs) {
        delete item.address;
        delete item.phone;
        docsResult.push(item);
    }
    const guestData = {
        docs: docsResult,
        totalDocs,
        page,
        totalPages,
        limit,
        prevPage: page > 1 ? page - 1 : 1,
        nextPage: totalPages == page ? totalPages : page + 1,
        hasPrevPage: page > 1 ? true : false,
        hasNextPage: page != totalPages ? true : false,
        pagingCounter: 1
    };
    return guestData || <IGuestPaginate>{};
  }
  
}

export default new GuestRepository();
