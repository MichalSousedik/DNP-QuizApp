import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateQuestionDialogComponent } from '../create-question-dialog/create-question-dialog.component';
import { Quiz } from '../objects/quiz';
import { QuizService } from '../quiz.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  quiz = new Quiz();

  quizNameEmpty = false;

  noQuestions = false;

  constructor(public dialog: MatDialog, private quizService: QuizService) { }

  ngOnInit() {
  }

  createQuestion(): void {
    const dialogRef = this.dialog.open(CreateQuestionDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      this.quiz.questions.push(result);
      }
    });
    this.noQuestions = false;
  }

  createQuiz(): void {
    if (!this.quiz.name || this.quiz.name === '') {
      this.quizNameEmpty = true;
      return;
    }
    if (this.quiz.questions.length === 0) {
      this.noQuestions = true;
      return;
    }
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.quiz.createdBy = currentUser.username;
    this.quiz.date = new Date();
    this.quizService.createQuiz( this.quiz )
    .pipe(first())
            .subscribe(
                data => {
                    alert('Quiz created.');
                },
                error => {
                    alert(error);
                });
    this.quiz = new Quiz();
    this.quizNameEmpty = false;
  }

}