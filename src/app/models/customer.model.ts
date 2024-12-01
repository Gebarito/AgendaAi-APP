import { Order } from "./order.model";

export interface Customer {
    id?: number; // Can be a number cause it`s a long in API
    cpf: string;
    name: string;
    email: string;
    password: string;
    telNumber: string;
    cep: string;
    address: string;

    /** External */
    orders?: Order[];

}
