import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public loginForm;
  public return = '';
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = {
      username: '',
      password: '',
    };
  }

  onSubmit() {
    console.log(this.loginForm);
    this.userService.login(this.loginForm);
  }

  signup() {
    this.router.navigate(['/signup']);
  }
  onLogout() {
    this.userService.logout();
  }
}
