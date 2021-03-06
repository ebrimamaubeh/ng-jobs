import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loading = false;
  public error = false;
  public message: string;
  fg: FormGroup;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.message;
    // this.userService.attemptAuth
    this.fg = this.fb.group({
        'email': [null, Validators.compose([Validators.required, Validators.email])],
        'password': [null, Validators.required]
    });
  }



  login() {
     this.loading = true;
    console.log('credentails', this.fg.value);
    this.userService.attemptAuth(this.fg.value).subscribe(data => {
        this.loading = false;
        this.error = false;
        console.log('after authenticating the user', data);
        if(data.data.user.userable_type.toLowerCase().includes('employer'))
            this.router.navigateByUrl('jobs/job_seekers');
        else
            this.router.navigateByUrl('jobs');
    }, err => {
        this.loading = false;
        this.error = true;
        this.message = err.error;
        console.error('error attempting to login ', err);
    });
  }

}
