import { nanoid } from "nanoid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Categories, Todo } from "../types/todo";
import { getCreatedTimeToString } from "lib/utils";

interface TodosState {
  active: Todo[];
  archived: Todo[];
  editedTodo: Todo | null;
  popupEditState: boolean;
  popupCreateState: boolean;
}

const initialState: TodosState = {
  active: [
    {
      id: nanoid(),
      category: Categories.TASK,
      content: "tomatoes, bread 3/9/2021",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: Date.now(),
      name: "Shopping list",
    },
    {
      id: nanoid(),
      category: Categories.THOUGHT,
      content: "build a house 21/01/2022",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: Date.now(),
      name: "idk",
    },
    {
      id: nanoid(),
      category: Categories.THOUGHT,
      content: "build a house 23/09/2022 24/10/2022",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: Date.now(),
      name: "idk",
    },
    {
      id: nanoid(),
      category: Categories.IDEA,
      content: "plant a tree",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: Date.now(),
      name: "3",
    },
    {
      id: nanoid(),
      category: Categories.THOUGHT,
      content: "build a house 09/23/2022 10/24/2022",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: Date.now(),
      name: "idk",
    },
  ],
  archived: [
    {
      id: nanoid(),
      category: Categories.THOUGHT,
      content: "build a house",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: Date.now(),
      name: "idk",
    },
    {
      id: nanoid(),
      category: Categories.IDEA,
      content: "run",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: Date.now(),
      name: "idk",
    },
  ],
  popupEditState: false,
  editedTodo: null,
  popupCreateState: false,
};

const getSortedTodos = (todos: Todo[]) =>
  todos.sort(
    (todoA, todoB) => todoA.createdInMilliseconds - todoB.createdInMilliseconds
  );

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: TodosState, action: PayloadAction<Todo>) => {
      state.active = state.active.concat(action.payload);
    },
    removeTodo: (state: TodosState, action: PayloadAction<Todo["id"]>) => {
      state.active = state.active.filter(({ id }) => id !== action.payload);
    },
    archiveTodo: (state: TodosState, action: PayloadAction<Todo>) => {
      state.active = state.active.filter(({ id }) => id !== action.payload.id);
      state.archived = state.archived.concat(action.payload);
    },
    editTodo: (state: TodosState, action: PayloadAction<Todo>) => {
      state.active = getSortedTodos(
        state.active
          .map((todo) => todo.id === action.payload.id ? action.payload : todo)
      );
    },
    archiveTodos: (state: TodosState) => {
      state.archived = getSortedTodos(state.archived.concat(state.active));
      state.active = [];
    },
    deleteTodos: (state: TodosState) => {
      state.active = [];
    },
    openCreatePopup: (state: TodosState) => {
      state.popupEditState = false;
      state.popupCreateState = true;
    },
    closeCreatePopup: (state: TodosState) => {
      state.popupCreateState = false;
    },
    openEditPopup: (state: TodosState, action: PayloadAction<Todo>) => {
      state.popupCreateState = false;
      state.editedTodo = action.payload;
      state.popupEditState = true;
    },
    closeEditPopup: (state: TodosState) => {
      state.popupEditState = false;
      state.editedTodo = null;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  archiveTodo,
  archiveTodos,
  deleteTodos,
  editTodo,
  openEditPopup,
  closeEditPopup,
  openCreatePopup,
  closeCreatePopup,
} = todosSlice.actions;

export const selectActiveTodos = (state: RootState) => state.todos.active;
export const selectArchivedTodos = (state: RootState) => state.todos.archived;
export const selectEditedTodo = (state: RootState) => state.todos.editedTodo;
export const selectPopupEditState = (state: RootState) =>
  state.todos.popupEditState;

export default todosSlice.reducer;
