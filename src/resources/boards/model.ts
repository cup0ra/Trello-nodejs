export interface IBoard {
  id: string;
  title: string
  columns: Columns[]
}

interface Columns {
  id: string;
  title: string;
  order: number;
}
