import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { ReportPreviewRoutingModule } from './report-preview-routing.module'
import { ReportPreviewComponent } from './report-preview.component'

@NgModule({
  declarations: [ReportPreviewComponent],
  imports: [CommonModule, ReactiveFormsModule, ReportPreviewRoutingModule],
  exports: [ReportPreviewComponent]
})
export class ReportPreviewModule {}
