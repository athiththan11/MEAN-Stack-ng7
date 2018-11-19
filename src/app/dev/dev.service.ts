import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const api = '/api/devs/';

@Injectable({
    providedIn: 'root'
})
export class DevService {
    constructor(private http: HttpClient) {}

    getAllDevs(): Observable<any> {
        return this.http.get<any>(api, httpOptions);
    }

    getDev(id: string): Observable<any> {
        return this.http.get<any>(`${api}${id}`, httpOptions);
    }

    postDev(data): Observable<any> {
        return this.http.post<any>(api, data, httpOptions);
    }

    updateDev(id: string, data): Observable<any> {
        return this.http.put<any>(`${api}${id}`, data, httpOptions);
    }

    deleteDev(id: string): Observable<{}> {
        return this.http.delete(`${api}${id}`, httpOptions);
    }
}
