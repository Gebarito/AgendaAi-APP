import { Job } from "./jobs.models";

export interface Order {
    id?: string;
    amount: number;
    status: string;
    dateCreated: Date;
    dateAppointment: Date;

    /** External */
    job?: Job;
}
