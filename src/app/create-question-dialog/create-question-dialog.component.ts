import { Component, OnInit } from '@angular/core';
import { Question } from '../objects/question';
import { Option } from '../objects/option';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-create-question-dialog',
  templateUrl: './create-question-dialog.component.html',
  styleUrls: ['./create-question-dialog.component.css']
})
export class CreateQuestionDialogComponent implements OnInit {

  question = new Question();

  option = new Option();


  emptyOptions = false;

  noCorrectOption = false;

  questionTextEmpty = false;

  optionTextEmpty = false;

  constructor(public thisDialogRef: MatDialogRef<CreateQuestionDialogComponent>) { }

  ngOnInit() {
  }

  addOption(): void {
    console.log(this.option);
    if (!this.option.text || this.option.text === '') {
      this.optionTextEmpty = true;
      return;
    }
    this.question.options.push(this.option);
    this.option = new Option();
    if (this.option.isCorrect === true) {
      this.noCorrectOption = false;
      return;
    }
    this.emptyOptions = false;
    this.optionTextEmpty = false;
  }

  createQuestion() {
    if (!this.question.text || this.question.text === '') {
      this.questionTextEmpty = true;
      return;
    }
    if (this.question.options.length === 0) {
      this.emptyOptions = true;
      return;
    }
    if (!this.question.options.find(option => option.isCorrect === true)) {
      this.noCorrectOption = true;
      return;
    }
    this.thisDialogRef.close(this.question);
  }

}
