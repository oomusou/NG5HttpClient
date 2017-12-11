import { Injectable } from '@angular/core';
import { IPostService } from './ipostservice.interface';
import { Post } from '../../model/post.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService implements IPostService {
  constructor(private httpClient: HttpClient) { }

  addPost(post: Post): void {
    this.httpClient
      .post<Post>('api/posts', post)
      .subscribe();
  }

  getAllPosts(): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>('api/posts');
  }
}
