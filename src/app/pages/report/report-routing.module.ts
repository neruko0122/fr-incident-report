import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ReportDetailComponent } from './report-detail/report-detail.component'
import { ReportListComponent } from './report-list/report-list.component'

const routes: Routes = [
  { path: '', component: ReportListComponent },
  { path: 'detail', component: ReportDetailComponent },
  { path: 'detail/:id', component: ReportDetailComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule {}
