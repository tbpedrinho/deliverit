export interface ICreateBillRequestDTO{
     bill_id:string;
     name : string;
     origin_value: number;
     vcto_date: Date;
     pgto_date: Date;
     correct_value: Number;
     qtd_overdue: number;
}