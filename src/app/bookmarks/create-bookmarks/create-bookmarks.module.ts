import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBookmarksComponent } from './create-bookmarks.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateBookmarksComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [CreateBookmarksComponent],
})
export class CreateBookmarksModule {}
