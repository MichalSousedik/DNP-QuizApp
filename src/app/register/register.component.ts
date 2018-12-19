import { Component, OnInit } from '@angular/core';
import { User } from '../objects/user';
import {Router} from '@angular/router';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

    loading = false;
  userEmpty = false;
  passwordNotTheSame = false;
  passwordConfirm: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  createUser(): void {
    if (!this.user.username || this.user.username === '') {
      this.userEmpty = true;
      return;
    }
    this.userEmpty = false;
    // if (!this.passwordConfirm || this.passwordConfirm !== this.user.username) {
    //     this.passwordNotTheSame = true;
    //     return;
    // }
    this.loading = true;
        this.userService.register(this.user)
            .pipe(first())
            .subscribe(
                data => {
                    alert('Registration successful');
                    this.router.navigate(['/sign_in']);
                },
                error => {
                    alert(error);
                    this.loading = false;
                });
  }

}
