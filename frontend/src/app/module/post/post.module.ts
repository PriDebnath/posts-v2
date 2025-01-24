import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { GetColorPipe } from './pipes/get-color/get-color.pipe';
import { PostCardComponent } from './components/post-list/post-card/post-card.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [PostListComponent, GetColorPipe, PostCardComponent],
  exports: [GetColorPipe],
  imports: [CommonModule, PostRoutingModule, NzIconModule, FormsModule],
})
export class PostModule {}
