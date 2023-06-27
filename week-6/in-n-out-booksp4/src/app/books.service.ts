/**
 * Title: book.service.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 24 Jun 2023
 * Description:  In-N-Out-BookSp1 App
*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from "rxjs/operators"
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Array<IBook>
  constructor() {
    this.books = [
      {
        isbn: "9780143111580",
        title: "Sapiens: A Brief History of Humankind",
        description: "A thought-provoking exploration of human history and the impact of Homo sapiens on the world.",
        numOfPages: 464,
        authors: ["Yuval Noah Harari"]
      },
      {
        isbn: "9781451673319",
        title: "Thinking, Fast and Slow",
        description: "An enlightening book that delves into the two systems that drive our thinking and decision-making processes.",
        numOfPages: 512,
        authors: ["Daniel Kahneman"]
      },
      {
        isbn: "9780066620992",
        title: "The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail",
        description: "An influential work that explores the challenges faced by established companies in adapting to disruptive innovations.",
        numOfPages: 288,
        authors: ["Clayton M. Christensen"]
      },
      {
        isbn: "9780140449334",
        title: "Man's Search for Meaning",
        description: "A powerful memoir by Viktor E. Frankl, a Holocaust survivor, exploring the quest for meaning in life.",
        numOfPages: 184,
        authors: ["Viktor E. Frankl"]
      },
      {
        isbn: "9780062457714",
        title: "The Power of Now: A Guide to Spiritual Enlightenment",
        description: "A transformative book that emphasizes the importance of living in the present moment and finding inner peace.",
        numOfPages: 256,
        authors: ["Eckhart Tolle"]
      }
    ]
  }
  getBooks(): Observable<IBook[]> {
    return of(this.books)
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn)
        return book;
    }
  }
}
