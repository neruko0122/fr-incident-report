import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { AbstractTable } from 'src/app/shared'

import { ACCOUNT_HEADERS } from './../../constants/account'

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

  accountHeaders = ACCOUNT_HEADERS

  constructor(private router: Router, private route: ActivatedRoute) {
    super()
  }

  ngOnInit(): void {}

  edit(id: string): void {
    this.router.navigate(['detail', id], {
      relativeTo: this.route
    })
  }

  create(): void {
    this.router.navigate(['detail'], {
      relativeTo: this.route
    })
  }

  changePassword(id: string) {
    this.passwordChanged.emit(id)
  }

  delete(id: string) {
    this.deleted.emit(id)
  }
}
