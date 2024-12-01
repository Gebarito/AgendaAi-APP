import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Job } from "../models/jobs.models";

@Injectable({
    providedIn: 'root'
})
export class JobsServices {

    private url = environment.api;

    constructor(
        private httpClient: HttpClient
    ) { }

    getJobs() {
        return this.httpClient.get<Job[]>(`${this.url}/jobs`);
    }

    
}
