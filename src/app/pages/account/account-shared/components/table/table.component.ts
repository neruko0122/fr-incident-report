import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Observable } from 'rxjs'
import { AbstractTable, TableHeader } from 'src/app/shared'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends AbstractTable implements OnInit {
  @Input() list$!: Observable<any[]>
  @Output()
  deleted = new EventEmitter<string>()
  @Output()
  passwordChanged = new EventEmitter<any>()

  accountHeaders: TableHeader[] = [
    {
      isButton: true,
      isSort: false,
      key: 'detail',
      name: ''
    },
    {
      isButton: true,
      isSort: false,
      key: 'changePassword',
      name: ''
    },
    {
      isButton: false,
      isSort: true,
      key: 'lastName',
      name: 'LASTNAME'
    },
    {
      isButton: false,
      isSort: true,
      key: 'firstName',
      name: 'FIRSTNAME'
    },
    {
      isButton: false,
      isSort: true,
      key: 'division',
      name: 'DIVISION'
    },
    {
      isButton: false,
      isSort: true,
      key: 'role',
      name: 'ROLE'
    },
    {
      isButton: true,
      isSort: false,
      key: 'delete',
      name: ''
    }
  ]

  constructor() {
    super()
  }

  ngOnInit(): void {}

  edit(id: string) {}

  changePassword(id: string) {
    this.passwordChanged.emit(id)
  }

  delete(id: string) {
    this.deleted.emit(id)
  }

  create() {}
}
