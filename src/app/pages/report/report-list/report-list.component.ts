import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { Report } from 'src/app/shared/api-clients'

import { ReportSearchParam } from '../report-shared/models/report'

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {
  list$!: Observable<Report[]>
  searchParam!: ReportSearchParam
  constructor(private router: Router) {}

  private searched$ = new BehaviorSubject<ReportSearchParam>({
    startAt: null,
    endAt: null,
    division: null,
    impact: null
  })

  ngOnInit(): void {
    this.list$ = this.searched$.asObservable().pipe(
      switchMap(param => {
        return this.findReports(param)
      })
    )
  }

  private findReports(param: ReportSearchParam) {
    return of(DUMMY_REPORTS)
  }

  delete(id: string) {}

  search(param: ReportSearchParam) {
    this.searched$.next(param)
    this.router.navigate([], {
      queryParams: {
        startAt: param.startAt,
        endAt: param.endAt,
        division: param.division,
        impact: param.impact
      }
    })
  }
}

const DUMMY_REPORTS: Report[] = [
  {
    id: '1',
    type: 'Needlestick',
    createdAt: new Date('2020-03-01 10:00:00'),
    division: 'general',
    impact: '1'
  },
  {
    id: '2',
    type: 'Needlestick',
    createdAt: new Date('2020-03-02 10:00:00'),
    division: 'general',
    impact: '2'
  },
  {
    id: '3',
    type: 'Needlestick',
    createdAt: new Date('2020-03-03 10:00:00'),
    division: 'general',
    impact: '1'
  },
  {
    id: '4',
    type: 'Needlestick',
    createdAt: new Date('2020-03-04 10:00:00'),
    division: 'general',
    impact: '2'
  },
  {
    id: '5',
    type: 'Needlestick',
    createdAt: new Date('2020-03-05 10:00:00'),
    division: 'general',
    impact: '3'
  },
  {
    id: '6',
    type: 'Needlestick',
    createdAt: new Date('2020-03-06 10:00:00'),
    division: 'general',
    impact: '5'
  }
]
