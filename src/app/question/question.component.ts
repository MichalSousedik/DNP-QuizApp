import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Question } from '../objects/question';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() type: string;


  constructor() { }

  ngOnInit() {
  }

  isCorrect(): boolean {
      return this.question.options.find(option => option.isCorrect === true).isChecked === true;

  }

  isOptionCorrect(option): boolean {
      return (!this.isCorrect() && option.isCorrect);
  }

}
