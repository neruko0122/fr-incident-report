import { TableHeader } from 'src/app/shared'

export const ACCOUNT_HEADERS: TableHeader[] = [
  {
    isButton: true,
    isSort: false,
    key: 'detail',
    name: ''
  },
  {
    isButton: true,
    isSort: false,
    key: 'changePassword',
    name: ''
  },
  {
    isButton: false,
    isSort: true,
    key: 'lastName',
    name: 'LASTNAME'
  },
  {
    isButton: false,
    isSort: true,
    key: 'firstName',
    name: 'FIRSTNAME'
  },
  {
    isButton: false,
    isSort: true,
    key: 'division',
    name: 'DIVISION'
  },
  {
    isButton: false,
    isSort: true,
    key: 'role',
    name: 'ROLE'
  },
  {
    isButton: true,
    isSort: false,
    key: 'delete',
    name: ''
  }
]

export const ROLES: any = [
  {
    key: 'admin',
    value: 'ADMINISTORATOR'
  },
  {
    key: 'operator',
    value: 'OPERATOR'
  }
]
