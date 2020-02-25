import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { PagesRoutingModule } from './pages-routing.module'
import { PagesComponent } from './pages.component'
import { HeaderComponent } from './shared/header/header.component'
import { SidebarComponent } from './shared/sidebar/sidebar.component'

@NgModule({
  declarations: [PagesComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule, PagesRoutingModule]
})
export class PagesModule {}
