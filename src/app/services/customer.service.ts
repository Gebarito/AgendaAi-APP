import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Customer } from "../models/customer.model";

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    private url = `${environment.api}/customers`;


    constructor(
        private httpclient: HttpClient,
    ) {}

    postCustomer(
        customer: Customer
    ) {
        return this.httpclient.post(this.url + '/subscribe', customer);
    }

    getCustomerById(
        id: number
    ) {
        return this.httpclient.get(`${this.url}/${id}`);
    }

    getCustomerByCpf(
        cpf: string
    ) {
        return this.httpclient.get(`${this.url}/${cpf}`);
    }


}