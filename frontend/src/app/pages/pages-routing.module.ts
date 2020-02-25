import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PagesComponent } from './pages.component'

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'account',
        loadChildren: () =>
          import('./account/account.module').then(m => m.AccountModule)
      },
      {
        path: 'report',
        loadChildren: () =>
          import('./report/report.module').then(m => m.ReportModule)
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('./setting/setting.module').then(m => m.SettingModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
