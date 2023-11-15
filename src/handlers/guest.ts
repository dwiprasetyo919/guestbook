import { NextFunction, Request, Response } from "express";
import GuestServices from "../services/guest";
import { ILike, Raw } from 'typeorm';

class GuestHandler {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, address, phone, note } = req.body;
      return res.send(
        await GuestServices.create(name, address, phone, note)
      );
    } catch (error) {
      return res
        .send({
          code: 400,
          error: error.message,
        })
        .status(500);
    }
  }
  async list (req: Request, res: Response) {
    try {
      const page: number = parseInt(req.query.page as any) || 1;
      const take = parseInt(req.query.limit as any) || 10;
      let search: any = [];
      let sort: object = {};
      if (req.query.sort) {
        const sortBy = req.query.sort.toString();
        const gate = sortBy.split('|');
        gate.forEach((gateData) => {
            const str = gateData.split(':');
            let field = str[0].toString();
            let value = str[1].toString().toUpperCase();
            sort[field] = value;
        });
    }
          
      if (req.query.search != null) {
        search = [
            {
                name: ILike(`%${req.query.search}%`)
            },
            {
                address:`${req.query.search}`
            }
        ];
      } 
      

      const total = await GuestServices.count({ search }, res);
      const params = {
          search,
          sort,
          totalDocs: total,
          limit: take,
          take,
          page,
          totalPages: Math.ceil(total / take),
          skip: (page - 1) * take
      };
      
      const guestService = await GuestServices.search(params);        
      return res.status(200).json({
        status: 'success',
        code: 200,
        response: guestService,
        message: "get data"
    });
  } catch (error: any) {
      console.log(error);
      
      return res.json({ 
        code: 500,
        status: "error",
        message: error.message });
  }
  };
}

export default new GuestHandler();
