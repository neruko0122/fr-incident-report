import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared/shared.module'

import { AccountDetailComponent } from './account-detail/account-detail.component'
import { AccountListComponent } from './account-list/account-list.component'
import { AccountRoutingModule } from './account-routing.module'
import { SearchComponent } from './account-shared/components/search/search.component'
import { TableComponent } from './account-shared/components/table/table.component'

@NgModule({
  declarations: [
    AccountListComponent,
    AccountDetailComponent,
    SearchComponent,
    TableComponent
  ],
  imports: [AccountRoutingModule, FormsModule, SharedModule]
})
export class AccountModule {}
