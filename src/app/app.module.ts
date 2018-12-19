import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {DemoMaterialModule} from './material-module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuizStructureComponent } from './quiz-structure/quiz-structure.component';
import { QuizesComponent } from './quizes/quizes.component';
import { HistoryComponent } from './history/history.component';
import { CreateComponent } from './create/create.component';
import { CreateQuestionDialogComponent } from './create-question-dialog/create-question-dialog.component';
import { QuestionComponent } from './question/question.component';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';
import { QuizSolutionComponent } from './quiz-solution/quiz-solution.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';


// used to create fake backend
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    QuizesComponent,
    QuizStructureComponent,
    HistoryComponent,
    CreateComponent,
    CreateQuestionDialogComponent,
    QuestionComponent,
    QuizDetailComponent,
    QuizSolutionComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpModule,
    HttpClientModule
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateQuestionDialogComponent
  ]
})
export class AppModule {}
