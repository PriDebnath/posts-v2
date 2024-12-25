import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  private API_URL = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) {}

  getAllPosts(data: {}) {
    return this.http.get(this.API_URL + 'posts/post/');
  }
}
