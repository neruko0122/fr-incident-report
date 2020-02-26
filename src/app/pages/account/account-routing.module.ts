import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AccountDetailComponent } from './account-detail/account-detail.component'
import { AccountListComponent } from './account-list/account-list.component'

const routes: Routes = [
  { path: '', component: AccountListComponent },
  { path: 'detail', component: AccountDetailComponent },
  { path: 'detail/:id', component: AccountDetailComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
