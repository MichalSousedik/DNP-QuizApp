import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService } from '../quiz.service';
import { Quiz } from '../objects/quiz';
import {Router} from '@angular/router';


@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {

  quiz: Quiz = new Quiz();

  optionNotSelected = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private quizService: QuizService,
    private location: Location) { }

  ngOnInit(): void {
    this.getQuiz();
  }

  getQuiz(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quizService.getQuiz(id)
      .subscribe(quiz => this.quiz = quiz);
  }

  submit(): void {
    console.log(this.quiz);
    if (!this.quiz.questions.find(question => !question.selectedOptionId)) {
      this.quizService.submitQuiz(this.quiz).subscribe(
                data => {
                    alert('Quiz submited');
                    this.router.navigate(['/user/quiz_solution/' + this.quiz.id]);
                },
                error => {
                    alert(error);
                });
    }
    else {
      this.optionNotSelected = true;
    }
  }



}
