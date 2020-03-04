import { Component, OnInit } from '@angular/core'

import { PreviewService } from '../pages/report/report-shared/services/preview.service'
import { Report } from '../shared/api-clients'

@Component({
  selector: 'app-report-preview',
  templateUrl: './report-preview.component.html',
  styleUrls: ['./report-preview.component.scss']
})
export class ReportPreviewComponent implements OnInit {
  dto!: Report
  constructor(private previewService: PreviewService) {}

  ngOnInit(): void {
    this.dto = this.previewService.getReportDto()
    this.previewService.onDataReady()
  }
}
