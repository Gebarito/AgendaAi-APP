import { RangeTime } from './RangeTime.model';

export interface Schedule {
    id?: string; // can`t be number cause it is a UUID
    interval: number;

    /** external */

    /** RangeTimes */
    sunday?: RangeTime;
    monday?: RangeTime;
    tuesday?: RangeTime;
    wednesday?: RangeTime;
    thursday?: RangeTime;
    friday?: RangeTime;
    saturday?: RangeTime;

}
