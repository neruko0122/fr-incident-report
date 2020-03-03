import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PreviewService } from '../pages/report/report-shared/services/preview.service';

@Component({
  selector: "app-report-preview",
  templateUrl: "./report-preview.component.html",
  styleUrls: ["./report-preview.component.scss"]
})
export class ReportPreviewComponent implements OnInit {
  constructor(
    private previewService: PreviewService,
    private activeRoute: ActivatedRoute
  ) {
    const paramMap = this.activeRoute.snapshot.paramMap;
  }

  ngOnInit(): void {
    this.previewService.onDataReady();
  }
}
