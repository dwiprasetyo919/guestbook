import GuestRepository from "../repositories/guest";
import { Guest } from "../models/guest.entity";
class GuestServices {
  async create(
    name: string,
    address: string,
    phone: string,
    note: string
  ) {
    const guest = new Guest();
    guest.name = name;
    guest.address = address;
    guest.phone = phone;
    guest.note = note;
    return await GuestRepository.create(guest);
  }

  async count (params: any, res: any): Promise<number>{
    const { search } = params;
    return await GuestRepository.count(search);
  }
  async search(params: any){
    return await GuestRepository.search(params);
  }
}

export default new GuestServices();
