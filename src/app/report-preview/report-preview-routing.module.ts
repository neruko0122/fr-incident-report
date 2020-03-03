import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ReportPreviewComponent } from './report-preview.component'

const routes: Routes = [
  {
    path: '',
    component: ReportPreviewComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportPreviewRoutingModule {}
