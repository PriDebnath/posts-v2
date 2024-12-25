import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../services/post-service.service';

@Component({
  selector: 'app-post-list',
  standalone: false,

  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  constructor(private postServiceService: PostServiceService) {}

  ngOnInit(): void {
    this.postServiceService.getAllPosts({}).subscribe({
      next: (success) => {
        console.log({ success });
      },
      error: (err) => {
        console.log({ err });
      },
    });
  }
}
