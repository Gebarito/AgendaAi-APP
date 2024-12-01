import { Injectable } from "@angular/core";
import { Customer } from "../models/customer.model";
import { Business } from "../models/business.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentID = 0;
    currentDoc = '';
    currentPassword = '';
    accountType = '';

    constructor() {}

    login(
        type: string,
        customer?: Customer,
        business?: Business,
    ) {
        this.accountType = type;

        if(this.accountType === 'business') {
            this.currentID = business?.id || 0;
            this.currentDoc = business?.cnpj || '';
            this.currentPassword = business?.password || '';
        }

        else if(this.accountType === 'customer') {
            this.currentID = customer?.id || 0;
            this.currentDoc = customer?.cpf || '';
            this.currentPassword = customer?.password || '';
        }
    }

    logout(){
        this.currentID = 0;
        this.currentDoc = '';
        this.currentPassword = '';
        this.accountType = '';
    }

    getCurrentId() {
        return this.currentID;
    }

    getCurrentDoc() {
        return this.currentDoc;
    }
    
}
