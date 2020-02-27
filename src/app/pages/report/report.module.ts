import { NgModule } from '@angular/core'

import { ReportDetailComponent } from './report-detail/report-detail.component'
import { ReportListComponent } from './report-list/report-list.component'
import { ReportRoutingModule } from './report-routing.module'

@NgModule({
  declarations: [ReportListComponent, ReportDetailComponent],
  imports: [ReportRoutingModule]
})
export class ReportModule {}
