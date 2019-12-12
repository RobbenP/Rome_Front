import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReviewComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ReviewModule { }
