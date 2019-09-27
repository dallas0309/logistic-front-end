import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {StorageService} from './storage.service';
import {Observable, throwError} from 'rxjs';
import {Provider} from './provider';
import {Contact} from './contact';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = 'http://127.0.0.1:8000/api/provider/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.storage.getToken()
    })
  };
  constructor(private http: HttpClient, private storage: StorageService) { }
  getContact(providerId: number): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url + providerId + '/contact/', this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'No data found');
  }
  getContactDetail(providerId: number, id: number): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.url + providerId + '/contact/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  addContact(contactData, providerId: number, userId: number) {
    contactData.provider = providerId;
    contactData.user = userId;
    console.log(contactData);
    return this.http.post<any>(this.url + providerId + '/contact/', contactData, this.httpOptions);
  }
  editContact(contactData, providerId: number, userId: number, id: number) {
    contactData.provider = providerId;
    contactData.user = userId;
    return this.http.put<any>(this.url + providerId + '/contact/' + id, contactData, this.httpOptions);
  }
  deleteContact(providerId: number, id: number) {
    return this.http.delete(this.url + providerId + '/contact/' + id, this.httpOptions);
  }

}
