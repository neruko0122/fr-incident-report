import { TableHeader } from 'src/app/shared'

export const REPORT_HEADERS: TableHeader[] = [
  {
    isButton: true,
    isSort: false,
    key: 'detail',
    name: ''
  },
  {
    isButton: false,
    isSort: true,
    key: 'createdAt',
    name: 'CREATED AT'
  },
  {
    isButton: false,
    isSort: true,
    key: 'type',
    name: 'TYPE'
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
    key: 'impact',
    name: 'IMPACT'
  },
  {
    isButton: true,
    isSort: false,
    key: 'delete',
    name: ''
  }
]

export const IMPACTS: any = [
  {
    key: '1',
    value: '1 as hogefugapiyo'
  },
  {
    key: '2',
    value: '2 as hogefugapiyo'
  },
  {
    key: '3',
    value: '3 as hogefugapiyo'
  },
  {
    key: '4',
    value: '4 as hogefugapiyo'
  },
  {
    key: '5',
    value: '5 as hogefugapiyo'
  },
  {
    key: '6',
    value: '6 as hogefugapiyo'
  },
  {
    key: '7',
    value: '7 as hogefugapiyo'
  }
]
