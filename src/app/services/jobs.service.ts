import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Job } from "../models/jobs.models";

@Injectable({
    providedIn: 'root'
})
export class JobsServices {

    private url = `${environment.api}/jobs`;

    constructor(
        private httpClient: HttpClient
    ) { }

    getJobs() {
        return this.httpClient.get<Job[]>(this.url);
    }

    createNewJob(
        job: Job
    ) {
        return this.httpClient.post<Job>(this.url + '/new', job);
    }

    editJob(
        job: Job
    ) {
        return this.httpClient.put<Job>(`${this.url}/${job.id}}`, job);
    }

    deleteJob(
        id: string
    ) {
        return this.httpClient.delete<Job>(`${this.url}/${id}`);
    }

}
