import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { routerTransition } from 'src/app/router.animations'
import { AbstractDetail } from 'src/app/shared'

import { ROLES } from './../account-shared/constants/account'

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
  animations: [routerTransition()]
})
export class AccountDetailComponent extends AbstractDetail implements OnInit {
  key: string
  dto: any = {
    lastName: 'Suzuki',
    firstName: 'Taro',
    division: 'Genaral',
    role: 'ADMINISTORATOR'
  }
  roleNames: any[] = ROLES

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    super()
    const paramMap = this.activeRoute.snapshot.paramMap
    this.key = paramMap.get('id') as string
  }

  ngOnInit(): void {
    this.buildForm()

    if (this.key) {
      this.form.patchValue({
        lastName: this.dto.lastName,
        firstName: this.dto.firstName,
        division: this.dto.division,
        role: this.dto.role
      })
    }
  }

  private buildForm(): void {
    this.form = this.fb.group({
      lastName: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      registerPassword: [null],
      confirmPassword: [null],
      division: [null, [Validators.required]],
      role: [null, [Validators.required]]
    })
  }

  get lastName(): FormControl {
    return this.form.get('lastName') as FormControl
  }
  get firstName(): FormControl {
    return this.form.get('firstName') as FormControl
  }
  get registerPassword(): FormControl {
    return this.form.get('registerPassword') as FormControl
  }
  get confirmPassword(): FormControl {
    return this.form.get('confirmPassword') as FormControl
  }
  get division(): FormControl {
    return this.form.get('division') as FormControl
  }
  get role(): FormControl {
    return this.form.get('role') as FormControl
  }

  register() {}

  cancel() {}
}
