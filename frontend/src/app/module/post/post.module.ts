import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { GetColorPipe } from './pipes/get-color/get-color.pipe';

@NgModule({
  declarations: [PostListComponent, GetColorPipe],
  exports: [GetColorPipe],
  imports: [CommonModule, PostRoutingModule],
})
export class PostModule {}
