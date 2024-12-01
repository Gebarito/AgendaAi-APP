import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Order } from "../models/order.model";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private url = `${environment.api}/orders`;

    constructor(
        private httpClient: HttpClient
    ) { }

    getOrders() {
        return this.httpClient.get<Order[]>(this.url);
    }

    createNewOrder(
        order: Order
    ) {
        return this.httpClient.post<Order>(this.url + '/new', order);
    }

    editJob(
        order: Order
    ) {
        return this.httpClient.put<Order>(`${this.url}/${order.id}}`, order);
    }
    
    deleteOrder(
        id: string
    ) {
        return this.httpClient.delete<Order>(`${this.url}/${id}`);
    }
}
