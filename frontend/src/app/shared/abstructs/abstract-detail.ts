import { FormGroup } from '@angular/forms'
import { Subject } from 'rxjs'

export abstract class AbstractDetail {
  key!: number | string
  id!: number
  form!: FormGroup
  formGroupClass = 'form-group row align-items-center'
  courseLabelClass = 'col-sm-5 col-form-label col-form-label-sm'
  labelClass = 'col-sm-3 col-form-label col-form-label-sm'
  detailLabelClass = 'col-form-label col-form-label-sm d-block'
  courseInputClass = 'form-control col-sm-7'
  inputClass = 'form-control col-sm-9'
  readOnlyClass = 'col-sm-9 m-0'
  detailInputClass = 'form-control'
  errorLabelClass = 'offset-sm-3 col-sm-9'
  courseErrorLabelClass = 'offset-sm-5 col-sm-9'
  protected onDestroy$ = new Subject()

  cancel() {
    history.back()
  }
}
