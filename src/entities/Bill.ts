import { uuid } from "uuidv4";

export class Bill {

    public readonly id: string;

    public bill_id: string;
    public name : string;
    public origin_value: number;
    public vcto_date: Date;
    public pgto_date: Date;
    public correct_value: Number;
    public qtd_overdue: number;

    constructor(props: Omit<Bill, 'id'>, id?: string){
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}