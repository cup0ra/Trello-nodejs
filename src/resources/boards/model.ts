export interface IBoard {
  id: string;
  title: string
  columns: Columns[]
}

export interface Columns {
  id: string;
  title: string;
  order: number;
}
