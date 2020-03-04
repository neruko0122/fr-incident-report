import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { routerTransition } from 'src/app/router.animations'
import { AbstractDetail } from 'src/app/shared'
import { Report } from 'src/app/shared/api-clients'

import { PreviewService } from '../report-shared/services/preview.service'
import { IMPACTS } from './../report-shared/constants/report'

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss'],
  animations: [routerTransition()]
})
export class ReportDetailComponent extends AbstractDetail implements OnInit {
  key: string
  modified = false
  dto: Report = {
    id: '1',
    type: 'Needlestick',
    createdAt: new Date('2020-03-02 10:00:00'),
    division: 'Genaral',
    impact: '2'
  }
  impacts: any[] = IMPACTS

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private previewService: PreviewService
  ) {
    super()
    const paramMap = this.activeRoute.snapshot.paramMap
    this.key = paramMap.get('id') as string
  }

  ngOnInit(): void {
    this.buildForm()

    if (this.key) {
      this.form.patchValue({
        type: this.dto.type,
        createdAt: this.dto.createdAt,
        division: this.dto.division,
        impact: this.dto.impact
      })
    }

    this.form.valueChanges.subscribe(() => {
      this.modified = true
    })
  }

  private buildForm(): void {
    this.form = this.fb.group({
      type: [null, [Validators.required]],
      createdAt: [null, [Validators.required]],
      division: [null, [Validators.required]],
      impact: [null, [Validators.required]]
    })
  }

  get type(): FormControl {
    return this.form.get('type') as FormControl
  }
  get createdAt(): FormControl {
    return this.form.get('createdAt') as FormControl
  }
  get division(): FormControl {
    return this.form.get('division') as FormControl
  }
  get impact(): FormControl {
    return this.form.get('impact') as FormControl
  }

  register() {}

  preview() {
    this.previewService.preview({
      id: '1',
      division: this.division.value,
      impact: this.impact.value,
      createdAt: new Date('2020-03-03 11:00:00')
    })
  }

  cancel() {
    this.router.navigate(['/report'])
  }
}
