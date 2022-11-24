import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookmarksDocument, CreateBookmarkGQL } from 'src/generated-types';

@Component({
  selector: 'app-create-bookmarks',
  templateUrl: './create-bookmarks.component.html',
  styleUrls: ['./create-bookmarks.component.scss'],
})
export class CreateBookmarksComponent {
  bookmarkName = new FormControl('', [Validators.required]);

  constructor(
    private readonly createBookmarkGql: CreateBookmarkGQL,
    private readonly dialogRef: MatDialogRef<CreateBookmarksComponent>
  ) {}

  ngOnInit(): void {}

  getBookmarkNameError() {
    if (this.bookmarkName.hasError('required')) {
      return 'You must enter a value.';
    }
    return '';
  }

  createBookmark() {
    this.createBookmarkGql
      .mutate(
        {
          createBookmarkData: { name: String(this.bookmarkName.value) },
        },
        {
          refetchQueries: [
            {
              query: BookmarksDocument,
            },
          ],
        }
      )
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
