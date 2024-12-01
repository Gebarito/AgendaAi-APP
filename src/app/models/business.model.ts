import { Job } from './jobs.models';

export interface Business {
    id?: number; // Can be number cause it`s a long in API
    cnpj: string;
    name: string;
    email: string;
    password: string;
    telNumber: string;
    cep: string;
    address: string;
    
    /** external */
    jobs?: Job[];
}
