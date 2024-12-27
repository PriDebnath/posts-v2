import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../services/post-service.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  standalone: false,

  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postServiceService: PostServiceService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postServiceService.getAllPosts({}).subscribe({
      next: (data) => {
        this.posts = data as [];
      },
      error: (err) => {
        console.log({ err });
      },
    });
  }
}
