import { Component, OnInit } from '@angular/core';
import { IPostService } from './service/post/ipostservice.interface';
import { Post } from './model/post.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  posts: Observable<Post[]>;

  constructor(private postService: IPostService) {
  }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
  }

  onClick() {
    const post = <Post>{
      'title' : this.title,
      'author' : 'Sam'
    };

    this.postService.addPost(post);
    this.posts = this.postService.getAllPosts();
  }
}
