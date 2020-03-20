import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../models/user.interface';
import { IPost } from '../models/post.interface';

@Injectable()
export class UserService {
  usersUrl = 'https://jsonplaceholder.typicode.com/users';
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  commentsUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl);
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postsUrl);
  }

  // getComments(): Observable<IComment[]> {
  //   return this.http.get<IComment[]>(this.commentsUrl);
  // }
}
