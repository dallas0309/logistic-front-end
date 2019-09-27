import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {StorageService} from './storage.service';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Provider} from './provider';
import {Note} from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private url = 'http://127.0.0.1:8000/api/provider/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'token ' + this.storage.getToken()
    })
  };
  constructor(private http: HttpClient, private storage: StorageService) { }
  getNote(providerId: number): Observable<Note[]> {
    return this.http.get<Note[]>(this.url + providerId + '/note/', this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'No data found');
  }
  getNoteDetail(providerId: number, id: number): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.url + providerId + '/note/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  addNote(noteData, providerId: number, userId: number) {
    noteData.provider = providerId;
    noteData.user = userId;
    console.log(noteData);
    return this.http.post<any>(this.url + providerId + '/note/', noteData, this.httpOptions);
  }
  editNote(noteData, providerId: number, userId: number, id: number) {
    noteData.provider = providerId;
    noteData.user = userId;
    return this.http.put<any>(this.url + providerId + '/note/' + id, noteData, this.httpOptions);
  }
  deleteNote(providerId: number, id: number) {
    return this.http.delete(this.url + providerId + '/note/' + id, this.httpOptions);
  }
}
