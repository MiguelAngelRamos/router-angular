import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/IPost';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  //* Un metodo para traer los posts
  getPosts():Observable<IPost[]> {
    //* end point
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
  //* Un metodo para traer los comentarios
  getComments() {
  
  }

  //* Para traer al usuario por su Id
  // *id = 1, id = 2, id = 3
  getUserId(id: number):Observable<IUser> {
    // alt + 96
    // return this.httpClient.get('https://jsonplaceholder.typicode.com/users' + '/'+ id);
   return this.httpClient.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
   //* https://jsonplaceholder.typicode.com/users/1
  }

  //* Para traer a todos los usuarios (Un Array de 10 users (objetos))
  getUsersAll():Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }
}

// control + alt + } + espacio