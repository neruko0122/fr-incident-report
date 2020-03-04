import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { routerTransition } from 'src/app/router.animations'
import { AbstractDetail } from 'src/app/shared'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  animations: [routerTransition()]
})
export class SettingComponent extends AbstractDetail implements OnInit {
  dto: any = {
    sample: 'test'
  }
  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    super()
  }

  ngOnInit(): void {
    this.buildForm()

    if (this.key) {
      this.form.patchValue({
        role: this.dto.sample
      })
    }
  }

  private buildForm(): void {
    this.form = this.fb.group({
      sample: [null, [Validators.required]]
    })
  }

  get sample(): FormControl {
    return this.form.get('sample') as FormControl
  }

  register() {}

  cancel() {
    this.router.navigate(['/setting'])
  }
}
