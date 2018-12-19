import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { QuizStructureComponent } from './quiz-structure/quiz-structure.component';
import { QuizesComponent } from './quizes/quizes.component';
import { HistoryComponent } from './history/history.component';
import { CreateComponent } from './create/create.component';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';
import { QuizSolutionComponent } from './quiz-solution/quiz-solution.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign_in', pathMatch: 'full' },
  { path: 'sign_in', component: LoginComponent },
  { path: 'sign_up', component: RegisterComponent },
  {path: 'user', component: QuizStructureComponent,
  canActivate:[AuthGuard],
      children: [
          { path: '', redirectTo: 'quizes', pathMatch: 'full' },
          { path: 'quizes', component: QuizesComponent },
          { path: 'history', component: HistoryComponent },
          { path: 'create', component: CreateComponent },
          { path: 'quiz_detail/:id', component: QuizDetailComponent },
          { path: 'quiz_solution/:id', component: QuizSolutionComponent }
        ] },
];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
