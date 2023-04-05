import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs";

export interface APIRepones {
    Statuscode: number,
    IsSuccess: boolean,
    ErrorMessage: string[],
    Result: object
}
@Injectable({
    providedIn: 'root'
})
export class BaseService {
    constructor(private http: HttpClient) { }
    apiGet(url: string) {
        return this.http.get(url).toPromise() as Promise<object>;
    }
}