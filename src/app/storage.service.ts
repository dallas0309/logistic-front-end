import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private token: string;
  private user;
  constructor() { }

  public storeToken(token: string) {
    console.log('store token to local');
    this.token = token;
    localStorage.setItem('token', this.token);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public removeToken() {
    localStorage.removeItem('token');
  }

  public storeUser(user) {
    console.log('store user to local');
    this.user = JSON.stringify(user);
    localStorage.setItem('user', this.user);
  }

  public removeUser() {
    localStorage.removeItem('user');
  }

  public getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

}
