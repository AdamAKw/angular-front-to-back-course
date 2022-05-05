import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../models/Post";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  path: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.path}`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.path}/${id}`)
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.path, post, httpOptions);
  }
}
