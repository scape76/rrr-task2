export type Todo = {
  id: string;
  category: Category;
  content: string;
  created: string;
  createdInMilliseconds: number;
  name: string;
};

export enum Categories {
  IDEA = "idea",
  TASK = "task",
  THOUGHT = "thought",
}

export type Category = Categories.IDEA | Categories.TASK | Categories.THOUGHT;
