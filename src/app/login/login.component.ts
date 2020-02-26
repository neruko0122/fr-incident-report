import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup
  errorMessage!: string | null

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userId: [null, []],
      password: [null, []]
    })
    this.errorMessage = null
  }

  get userId(): FormControl {
    return this.form.get('userId') as FormControl
  }
  get password(): FormControl {
    return this.form.get('password') as FormControl
  }

  login() {
    this.router.navigate([''])
  }
}
