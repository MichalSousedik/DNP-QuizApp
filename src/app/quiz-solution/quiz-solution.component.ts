import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService } from '../quiz.service';
import { Solution } from '../objects/solution';

@Component({
  selector: 'app-quiz-solution',
  templateUrl: './quiz-solution.component.html',
  styleUrls: ['./quiz-solution.component.css']
})
export class QuizSolutionComponent implements OnInit {

  solution: Solution = new Solution();

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private location: Location) { }

  ngOnInit(): void {
    this.getSolution();
  }

  getSolution(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quizService.getSolution(id)
      .subscribe(solution => this.solution = solution);
  }


}
