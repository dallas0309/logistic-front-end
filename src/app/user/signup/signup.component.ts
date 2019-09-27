import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    is_superuser: false
  };
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    this.userService.signup(this.signupForm).subscribe(
      data => {
        console.log('Success!', data);
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
