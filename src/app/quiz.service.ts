import { Injectable } from '@angular/core';
import { Quiz } from './objects/quiz';
import { Observable, of } from 'rxjs';
import { History } from './objects/history';
import { Solution } from './objects/solution';
import { HttpClient } from '@angular/common/http';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getQuizes(userId): Observable<Quiz[]> {
    return this.http.get<any>(Constants.BASE_URL + `/quizes`);
  }

  getQuiz(quizId): Observable<Quiz> {
    return this.http.get<any>(Constants.BASE_URL + `/quizes/detail?quizId=${quizId}`);
  }

  getHistories(): Observable<History[]> {
    return this.http.get<any>(Constants.BASE_URL + `/histories`);
  }

  getSolution(historyId): Observable<Solution> {
    return this.http.get<any>(Constants.BASE_URL + `/histories/detail?historyId=${historyId}`);
  }

  createQuiz(quiz): Observable<Quiz> {
    return this.http.post<any>(Constants.BASE_URL + `/quizes`, quiz);
  }

  submitQuiz(quiz): Observable<Solution> {
    return this.http.post<any>(Constants.BASE_URL + `/histories`, quiz);
  }

}
