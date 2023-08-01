export type Note = {
  id: string;
  category: Category;
  content: string;
  created: string;
  createdInMilliseconds: number;
  name: string;
};

export enum Category {
  IDEA = "idea",
  TASK = "task",
  THOUGHT = "thought",
}
