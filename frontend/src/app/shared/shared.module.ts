import { ScrollingModule } from '@angular/cdk/scrolling'
import { CommonModule, DatePipe } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { OrderModule } from 'ngx-order-pipe'

const modules = [
  CommonModule,
  ReactiveFormsModule,
  ScrollingModule,
  OrderModule
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: [DatePipe]
})
export class SharedModule {}
