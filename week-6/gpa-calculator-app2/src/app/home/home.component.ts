/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 24 Jun 2023
 * Description: gpa-calculator-app1
*/
import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;

  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }

  saveEntry(): void {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  calculateResults(): void {
    let gpa: number = 0;

    for (let i = 0; i < this.transcriptEntries.length; i++) {
      switch (this.transcriptEntries[i].grade) {
        case 'A':
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.3;
          break;
        case 'B':
          gpa += 3.0;
          break;
        case 'B-':
          gpa += 2.7;
          break;
        case 'C+':
          gpa += 2.3;
          break;
        case 'C':
          gpa += 2.0;
          break;
        case 'C-':
          gpa += 1.7;
          break;
        case 'D+':
          gpa += 1.3;
          break;
        case 'D':
          gpa += 1.0;
          break;
        case 'D-':
          gpa += 0.7;
          break;
        case 'F':
          gpa += 0.0;
          break;
      }
    }

    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  clearEntries(): void {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

  ngOnInit(): void {
  }

}
