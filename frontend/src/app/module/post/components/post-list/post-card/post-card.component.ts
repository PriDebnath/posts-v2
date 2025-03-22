import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../../models/post.model';
import { PostServiceService } from '../../../services/post-service.service';
import { MessageServiceService } from '../../../services/message/message-service.service';

@Component({
  selector: 'app-post-card',
  standalone: false,

  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  postTitle: string = '';
  postDescription: string = '';
  @Input() post: Post = {};
  @Output() refeshList = new EventEmitter();

  constructor(
    private postServiceService: PostServiceService,
    private messageServiceService: MessageServiceService
  ) { }

  savePost() {
    let newPost: Post = {
      id: this.post.id,
      title: this.postTitle,
      description: this.postDescription,
      // editMode: true,
    };
    if (this.post.id) {
      this.updatePost(newPost);
    } else {
      this.createPost(newPost);
    }
  }

  editPost() {
    this.postTitle = this.post.title!;
    this.postDescription = this.post.description!;
    this.post = {
      ...this.post,
      editMode: true,
    };
  }

  closeEditPost() {
    this.post = {
      ...this.post,
      editMode: false,
    };
  }

  confirmDeletePost() {
    this.deletePost(this.post);
  }

  createPost(data: Post) {
    this.postServiceService.createPost(data).subscribe({
      next: (data) => {
        this.messageServiceService.createMessage({ type: 'success', message: 'Created post successfully' })
        this.post = data;
      },
      error: (err) => {
        console.log({ err });
      },
    });
  }

  updatePost(data: Post) {
    let messageId = this.messageServiceService.createloadingMessage('Updating post ...')
    this.postServiceService.updatePost(data).subscribe({
      next: (data) => {
        this.post = data;
        this.messageServiceService.removeloadingMessage(messageId)
        this.messageServiceService.createMessage({ type: 'success', message: 'Updated post successfully' })
      },
      error: (err) => {
        console.log({ err });
      },
    });
  }

  deletePost(data: Post) {
    this.postServiceService.deletePost(data).subscribe({
      next: (data) => {
        // this.post = data;
        this.refeshList.emit();
        this.messageServiceService.createMessage({ type: 'success', message: 'Deleted post successfully' })

      },
      error: (err) => {
        console.log({ err });
      },
    });
  }
}
