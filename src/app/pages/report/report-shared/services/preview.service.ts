import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/shared/api-clients';

@Injectable({
  providedIn: "root"
})
export class PreviewService {
  isPrinting = false;
  dto: Report = {
    id: null
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  preview(data: any) {
    this.isPrinting = true;
    this.dto = data;
    this.router.navigate(["preview"], {
      relativeTo: this.route
    });
  }

  onDataReady() {
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      history.back();
    });
  }

  getReportDto() {
    return this.dto;
  }
}
