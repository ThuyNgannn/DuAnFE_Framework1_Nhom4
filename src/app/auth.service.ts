import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  //thay doi thanh true de vao duoc trang detail va thanh false de demo chuc nang cua auth guard
  loggedIn = false;//true tuong trung cho trang thai da thoa man dieu kien dang nhap, false thi nguoc lai

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

}