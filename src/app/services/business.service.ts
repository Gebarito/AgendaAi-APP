import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Business } from "../models/business.model";

@Injectable({
    providedIn: 'root'
})
export class BusinessService {
    private url = `${environment.api}/business`;

    constructor(
        private httpClient: HttpClient
    ) { }

    getBusiness() {
        return this.httpClient.get<Business[]>(this.url);
    }

    createNewBusiness(
        business: Business
    ) {
        return this.httpClient.post<Business>(this.url + '/new', business);
    }

    editBusiness(
        business: Business
    ) {
        return this.httpClient.put<Business>(`${this.url}/${business.id}}`, business);
    }

    deleteBusiness(
        id: string
    ) {
        return this.httpClient.delete<Business>(`${this.url}/${id}`);
    }
}
