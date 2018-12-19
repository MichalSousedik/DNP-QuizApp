import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';
import { User } from '../objects/user';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
    returnUrl: string;
    loading = false;

  title = Constants.TITLE;

  constructor( private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthService) { }

  ngOnInit() {
    // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  signIn(): void {

    this.loading = true;
        this.authenticationService.login(this.user.username, this.user.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/user']);
                },
                error => {
                    alert(error);
                    this.loading = false;
                });

  }
}
