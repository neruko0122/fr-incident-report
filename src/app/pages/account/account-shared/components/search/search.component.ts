import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

import { AccountSearchParam } from '../../models'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output()
  searched = new EventEmitter<AccountSearchParam>()
  @Input()
  searchParam!: AccountSearchParam
  searchForm!: FormGroup
  roles: any = [
    {
      key: 'admin',
      value: 'ADMINISTORATOR'
    },
    {
      key: 'operator',
      value: 'OPERATOR'
    }
  ]

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm()
  }

  search() {}

  reset() {}

  private buildForm(): void {
    this.searchForm = this.fb.group({
      lastName: [null],
      firstName: [null],
      division: [null],
      role: [null]
    })
  }
  get lastName(): FormControl {
    return this.searchForm.get('lastName') as FormControl
  }
  get firstName(): FormControl {
    return this.searchForm.get('firstName') as FormControl
  }
  get division(): FormControl {
    return this.searchForm.get('division') as FormControl
  }
  get role(): FormControl {
    return this.searchForm.get('role') as FormControl
  }
}
