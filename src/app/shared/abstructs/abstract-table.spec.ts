import { AbstractTable } from './abstract-table'

class TestClass {
  public static create() {
    return new (class extends AbstractTable {
      search(doPageReset?: boolean): void {}
      constructor() {
        super()
      }
    })()
  }

  constructor(private value: string) {}
}

describe('AbstractTable', () => {
  let target: AbstractTable

  beforeEach(() => {
    target = TestClass.create()
  })
  it('should create an instance', () => {})
})
