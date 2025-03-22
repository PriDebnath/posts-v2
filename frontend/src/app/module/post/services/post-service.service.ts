import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  private API_URL = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }

  getAllPosts(data: {}) {
    let params = new HttpParams()
    params.append('order', '-id')
    return this.http.get(this.API_URL + 'posts/post/', {
      params
    });
  }

  createPost(data: Post) {
    return this.http.post(this.API_URL + 'posts/post/', data);
  }

  updatePost(data: Post) {
    return this.http.patch(this.API_URL + 'posts/post/' + data.id + '/', data);
  }

  deletePost(data: Post) {
    return this.http.delete(this.API_URL + 'posts/post/' + data.id + '/');
  }
}
