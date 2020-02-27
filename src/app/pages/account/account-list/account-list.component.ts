import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { routerTransition } from 'src/app/router.animations'

import { AccountSearchParam } from '../account-shared/models/account'

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  animations: [routerTransition()]
})
export class AccountListComponent implements OnInit {
  list$!: Observable<any[]>
  searchParam!: AccountSearchParam
  constructor(private router: Router) {}

  private searched$ = new BehaviorSubject<AccountSearchParam>({
    lastName: null,
    firstName: null,
    division: null,
    role: null
  })

  ngOnInit(): void {
    this.list$ = this.searched$.asObservable().pipe(
      switchMap(param => {
        return this.findAccounts(param)
      })
    )
  }

  private findAccounts(param: AccountSearchParam) {
    return of(DUMMY_ACCOUNTS)
  }

  delete(id: string) {}

  passwordChange(id: string) {}

  search(param: AccountSearchParam) {
    this.searched$.next(param)
    this.router.navigate([], {
      queryParams: {
        lastName: param.lastName,
        firstName: param.firstName,
        division: param.division,
        role: param.role
      }
    })
  }
}

const DUMMY_ACCOUNTS: any[] = [
  {
    id: 1,
    lastName: 'Suzuki',
    firstName: 'Taro',
    division: 'general',
    role: 'admin'
  },
  {
    id: 2,
    lastName: 'Yamada',
    firstName: 'Jiro',
    division: 'general',
    role: 'admin'
  },
  {
    id: 3,
    lastName: 'Tanaka',
    firstName: 'Hanako',
    division: 'general',
    role: 'admin'
  },
  {
    id: 4,
    lastName: 'Sato',
    firstName: 'Saburo',
    division: 'general',
    role: 'operator'
  },
  {
    id: 5,
    lastName: 'Kato',
    firstName: 'Shiro',
    division: 'general',
    role: 'operator'
  }
]
