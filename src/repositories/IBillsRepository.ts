import { Bill } from "../entities/Bill";

export interface IBillsRepository{
    
findById(id:string): Promise<Bill>
save(bill:Bill): Promise<void>;

}