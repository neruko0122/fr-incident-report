import { Subject } from 'rxjs'

export abstract class AbstractTable {
  // カラム指定なしだと逆になるので、reverse=true
  order = ''
  reverse = true
  protected onDestroy$ = new Subject()
  constructor() {}
  sortType = 'asc'
  protected destroy(): void {
    this.onDestroy$.next()
    this.onDestroy$.complete()
  }

  setOrder(value: string, isSort: boolean): void {
    if (!isSort) {
      return
    }

    if (this.order === value) {
      this.reverse = !this.reverse
    } else {
      this.reverse = false
    }
    this.order = value
  }

  clearOrder(): void {
    this.order = ''
    this.reverse = true
  }
}
