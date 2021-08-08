import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResult2 } from '../interfaces/user2';

@Injectable({
  providedIn: 'root'
})
export class Users2Service {

  constructor(private http: HttpClient) { 
    this.getUsers().subscribe((result:UserResult2) => {
    console.log(result.data);
    });
  }

  getUsers(){
    return this.http.get<UserResult2>("https://juan-client-server-backend.herokuapp.com/users")
  }
}
