import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Provider} from './provider';
import {StorageService} from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private url = 'http://127.0.0.1:8000/api/provider/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.storage.getToken()
    })
  };
  constructor(private http: HttpClient, private storage: StorageService) { }
  getProvider(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.url, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'No data found');
  }
  getProviderDetail(id: number): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.url + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  addProvider(providerData) {
    providerData.user = this.storage.getUser().id;
    console.log(providerData);
    return this.http.post<any>(this.url, providerData, this.httpOptions);
  }
  editProvider(providerData, id: number) {
    providerData.user = this.storage.getUser().id;
    return this.http.put<any>(this.url + id, providerData, this.httpOptions);
  }
  deleteProvider(id: number) {
    return this.http.delete(this.url + id, this.httpOptions);
  }
}
