import { Component, OnInit } from '@angular/core';
import { Quiz } from '../objects/quiz';
import {Router} from '@angular/router';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'questionsNumber', 'createdBy', 'date'];

  quizes: Quiz[];

  constructor(private router: Router, private quizService: QuizService) { }

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getQuizes(currentUser.userId);
  }

  getQuizes(userId): void {
    this.quizService.getQuizes(userId)
        .subscribe(quizes => this.quizes = quizes);
  }

  click(quiz) {
    this.router.navigate(['/user/quiz_detail/' + quiz.id]);
  }

}
