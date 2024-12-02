import { Schedule } from "./schedule.model";

export interface Job {
    id?: string; // can`t be number cause it is a UUID
    name: string;
    category: string;
    dataCreated: Date;
    active: boolean;
    description: string;

    /** external */
    schedule: Schedule;

}
