import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Constants } from '../constants';
import { User } from '../objects/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-quiz-structure',
  templateUrl: './quiz-structure.component.html',
  styleUrls: ['./quiz-structure.component.css']
})
export class QuizStructureComponent implements OnDestroy {

  currentUser: User;
  mobileQuery: MediaQueryList;

  title = Constants.TITLE;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private userService: UserService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}

