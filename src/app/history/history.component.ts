import { Component, OnInit } from '@angular/core';
import { History } from '../objects/history';
import {Router} from '@angular/router';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  displayedColumns: string[] = ['name', 'result', 'solved'];

  histories: History[];

  constructor(private router: Router, private quizService: QuizService) { }

  ngOnInit() {
    this.getHistories();
  }

  getHistories(): void {
    this.quizService.getHistories()
        .subscribe(histories => this.histories = histories);
  }

  click(history) {
    this.router.navigate(['/user/quiz_solution/' + history.id]);
  }

}
