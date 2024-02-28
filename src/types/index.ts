export interface ITask {
  id: number;
  title: string;
  description: string;
  columnId: string;
}

export interface IBoardColumn {
  id: string;
  title: string;
}
