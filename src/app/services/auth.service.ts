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

    inSession = true;

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

        this.inSession = true;
    }

    logout(){
        this.currentID = 0;
        this.currentDoc = '';
        this.currentPassword = '';
        this.accountType = '';
        this.inSession = false;
    }

    getCurrentId() {
        return this.currentID;
    }

    getCurrentDoc() {
        return this.currentDoc;
    }

    isInSession() {
        return this.inSession;
    }
    
}
