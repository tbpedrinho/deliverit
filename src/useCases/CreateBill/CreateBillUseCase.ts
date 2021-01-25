import { Bill } from "../../entities/Bill";
import { IBillsRepository } from "../../repositories/IBillsRepository";
import { ICreateBillRequestDTO } from "./CreateBillDTO";

export class CreateBillUserCase{
    constructor(
     private billsRepository: IBillsRepository
    ){}

    async execute(data:ICreateBillRequestDTO ){
      const billAlreadyExists = await this.billsRepository.findById(data.bill_id);

      if (billAlreadyExists) {
          throw new Error ('Bill already exists.');
      }

      const bill = new Bill(data);

      await this.billsRepository.save(bill);
    }
}