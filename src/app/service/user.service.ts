import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


interface User{
  name:string;
  email:string;
  phonenumber:number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  addUser(body:any){
   
    return this.http.post('https://jsonplaceholder.typicode.com/users',body);

  }

  UpdateUser(body:any){
    return this.http.put('https://jsonplaceholder.typicode.com/users/1',body)
  }

  DeleteUser(id:any){
    return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id);
  }


  getUsers() : Observable<User> {

    const headers = new HttpHeaders({
      'content-type': 'application/json charset=utf-8',
      'authenticationToken': '123456'
    });

    const params= new HttpParams()
    .set('pageSize',10)
    .set('pageOptions',100);

    return this.http.get<User>('https://jsonplaceholder.typicode.com/users', {headers: headers,params:params});

    // const user=[
    //   {userID:1,userName:'Bhushan Khaladkar'},
    //   {userID:2,userName:'Bob '},
    //   {userID:3,userName:'test'}
    // ]

    // return user;
  }
}
