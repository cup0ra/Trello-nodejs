export interface IBoard {
  id?: string;
  title: string;
  columns: Columns[];
}

export interface Columns {
  id?: string;
  title?: string;
  order?: number;
}

export interface ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string | null;
  columnId: string | null;
}

export type IUser = {
  id?: string;
  name: string;
  login: string;
  password: string;
};

export type UserReturn = Omit<IUser, 'password'>;

export interface ILoginDto {
  login: string;
  password: string;
}

export interface JwtPayload {
  login: string;
  id: string;
}
