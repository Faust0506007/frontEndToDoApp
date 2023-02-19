import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';




@Component({
  selector: 'lib-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hide= false;
  returnUrl: string;
  error: string;

  form: FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      passwordConfirm: new FormControl(null, [Validators.required])
    }
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get passwordConfirm(): FormControl {
    return this.form.get('passwordConfirm') as FormControl;
  }
  get f() {
    return this.form.controls;
  }

  ngOnInit() {

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit() {
    this.hide = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.authService
      .register(this.f.username.value, this.f.password.value, this.f.email.value)
      .pipe(first())
      .subscribe(
        data => {
          this.error = '';
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
        }
      );
  }

}
