import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'

import { PagesRoutingModule } from './pages-routing.module'
import { PagesComponent } from './pages.component'
import { HeaderComponent } from './shared/header/header.component'
import { SidebarComponent } from './shared/sidebar/sidebar.component'

@NgModule({
  declarations: [PagesComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class PagesModule {}
