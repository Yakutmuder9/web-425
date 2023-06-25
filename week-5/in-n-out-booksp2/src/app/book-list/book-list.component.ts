/**
 * Title: book-list.component.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 24 Jun 2023
 * Description:  In-N-Out-BookSp1 App
*/
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from './../books.service';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']
  book: IBook

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);

  }
}
