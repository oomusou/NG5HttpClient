import { Post } from '../../model/post.model';
import { Observable } from 'rxjs/Observable';

export abstract class IPostService {
  abstract addPost(post: Post): void;
  abstract getAllPosts(): Observable<Post[]>;
}
