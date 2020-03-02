import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared/shared.module'

import { ReportDetailComponent } from './report-detail/report-detail.component'
import { ReportListComponent } from './report-list/report-list.component'
import { ReportRoutingModule } from './report-routing.module'
import { SearchComponent } from './report-shared/components/search/search.component'
import { TableComponent } from './report-shared/components/table/table.component'

@NgModule({
  declarations: [
    ReportListComponent,
    ReportDetailComponent,
    SearchComponent,
    TableComponent
  ],
  imports: [ReportRoutingModule, FormsModule, SharedModule]
})
export class ReportModule {}
