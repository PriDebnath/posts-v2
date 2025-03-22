import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from "@angular/common/http";
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class MessageServiceService {
  constructor(private message: NzMessageService) { }

  createMessage(param: {
    type: "success" | "info" | "warning" | "error" | "loading";
    message: string
  }): void {
    this.message.create(param.type, param.message);
  }

  createloadingMessage(
    message: string
  ): string {
    const id = this.message.loading(message, { nzDuration: 0 }).messageId;
    return id
  }

  removeloadingMessage(id: string) {
    this.message.remove(id);
  }


}
