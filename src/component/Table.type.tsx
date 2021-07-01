export type CNTableData = Object[]

export interface CNTableProps {
  data: CNTableData
  dynamicTable?: Boolean
  maxHeigth?: Number
  limitOfItems?: number
  onSelectItems?: Function
}
