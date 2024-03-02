export interface ITask {
  id: string;
  title: string;
  description: string;
  columnId: string;
  background: string;
}

export interface IBoardColumn {
  id: string;
  title: string;
}
