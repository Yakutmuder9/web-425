/**
 * Title: book.interface.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 24 Jun 2023
 * Description:  In-N-Out-BookSp1 App
*/
export interface IBook {
    isbn: string;
    title: string;
    discription: string;
    numOfPages: number;
    author: Array<string>;
}