import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/IPost';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  //* Un metodo para traer los posts
  getPosts():Observable<IPost[]> {
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
  //* Un metodo para traer los comentarios
  getComments() {
  
  }
  //* Para traer al usuario por su Id
  getUserId() {
    // alt + 96
  }
  //* Para traer a todos los usuarios
  getUsersAll() {
    
  }
}

// control + alt + } + espacio