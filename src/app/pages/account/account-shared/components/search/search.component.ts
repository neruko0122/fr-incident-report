import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

import { AccountSearchParam } from '../../models'
import { ROLES } from './../../constants/account'

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
  roles = ROLES

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm()
  }

  search() {
    this.searched.emit({
      lastName: this.lastName.value,
      firstName: this.firstName.value,
      division: this.division.value,
      role: this.role.value
    })
  }

  reset() {
    this.searchForm.reset()
  }

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
