import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { AbstractTable, TableHeader } from 'src/app/shared'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends AbstractTable implements OnInit {
  list$!: Observable<any[]>
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
      name: '姓'
    },
    {
      isButton: false,
      isSort: true,
      key: 'firstName',
      name: '名'
    },
    {
      isButton: false,
      isSort: true,
      key: 'mailAddress',
      name: 'メールアドレス'
    },
    {
      isButton: false,
      isSort: true,
      key: 'division',
      name: '所属'
    },
    {
      isButton: false,
      isSort: true,
      key: 'role',
      name: 'ロール'
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

  edit(mailAddress: string) {}

  changePassword(mailAddress: string) {}

  delete(mailAddress: string) {}

  create() {}
}
