import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookmarksComponent } from './create-bookmarks/create-bookmarks.component';
import { Observable, map } from 'rxjs';
import { Bookmark, BookmarksGQL } from 'src/generated-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent implements OnInit {
  bookmarks$: Observable<Bookmark[]>;

  constructor(
    private readonly dialog: MatDialog,
    private readonly bookmarksGql: BookmarksGQL,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.bookmarks$ = this.bookmarksGql
      .watch()
      .valueChanges.pipe(map((result) => result.data.bookmarks));
  }

  onFabClick() {
    this.dialog.open(CreateBookmarksComponent);
  }

  onBookmarkClick(bookmarkId: string) {
    this.router.navigate(['/bookmarks', bookmarkId]);
  }
}
