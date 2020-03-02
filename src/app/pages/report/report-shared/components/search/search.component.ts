import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

import { ReportSearchParam } from '../../models'
import { IMPACTS } from './../../constants/report'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output()
  searched = new EventEmitter<ReportSearchParam>()
  @Input()
  searchParam!: ReportSearchParam
  searchForm!: FormGroup
  impacts = IMPACTS

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm()
  }
  search() {
    this.searched.emit({
      startAt: this.startAt.value,
      endAt: this.endAt.value,
      division: this.division.value,
      impact: this.impact.value
    })
  }

  reset() {
    this.searchForm.reset()
  }

  private buildForm(): void {
    this.searchForm = this.fb.group({
      startAt: [null],
      endAt: [null],
      division: [null],
      impact: [null]
    })
  }
  get startAt(): FormControl {
    return this.searchForm.get('startAt') as FormControl
  }
  get endAt(): FormControl {
    return this.searchForm.get('endAt') as FormControl
  }
  get division(): FormControl {
    return this.searchForm.get('division') as FormControl
  }
  get impact(): FormControl {
    return this.searchForm.get('impact') as FormControl
  }
}
