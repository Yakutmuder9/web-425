/**
 * Title: composer-list.component.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 02 Jun 2023
 * Description: composer component
*/
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;
  txtSearchControl = new FormControl('');

  constructor(private ComposerService: ComposerService) {
    this.composers = this.ComposerService.getComposers();
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposer(val))
  }

  ngOnInit(): void { }

  filterComposer(name: string) {
    alert(name);
  }
}
