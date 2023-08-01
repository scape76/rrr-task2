import { nanoid } from "nanoid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Category, Note } from "../types/note";
import { getCreatedTimeToString } from "lib/utils";

interface NotesState {
  active: Note[];
  archived: Note[];
  editedTodo: Note | null;
  popupEditState: boolean;
  popupCreateState: boolean;
}

const initialState: NotesState = {
  active: [
    {
      id: nanoid(),
      category: Category.TASK,
      content: "tomatoes, bread 3/9/2021",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: Date.now(),
      name: "Shopping list",
    },
    {
      id: nanoid(),
      category: Category.THOUGHT,
      content: "build a house 21/01/2022",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: Date.now(),
      name: "idk",
    },
    {
      id: nanoid(),
      category: Category.THOUGHT,
      content: "build a house 23/09/2022 24/10/2022",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: Date.now(),
      name: "idk",
    },
    {
      id: nanoid(),
      category: Category.IDEA,
      content: "plant a tree",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: Date.now(),
      name: "3",
    },
    {
      id: nanoid(),
      category: Category.THOUGHT,
      content: "build a house 09/23/2022 10/24/2022",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: Date.now(),
      name: "idk",
    },
  ],
  archived: [
    {
      id: nanoid(),
      category: Category.THOUGHT,
      content: "build a house",
      created: getCreatedTimeToString(new Date()),
      createdInMilliseconds: Date.now(),
      name: "idk",
    },
    {
      id: nanoid(),
      category: Category.IDEA,
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

const getSortedNotes = (Notes: Note[]) =>
  Notes.sort(
    (todoA, todoB) => todoB.createdInMilliseconds - todoA.createdInMilliseconds
  );

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: (
      state: NotesState,
      action: PayloadAction<Pick<Note, "category" | "name" | "content">>
    ) => {
      state.active = [
        {
          id: nanoid(),
          created: getCreatedTimeToString(new Date()),
          createdInMilliseconds: Date.now(),
          ...action.payload,
        },
        ...state.active,
      ];
    },
    removeNote: (state: NotesState, action: PayloadAction<Note["id"]>) => {
      state.active = state.active.filter(({ id }) => id !== action.payload);
    },
    archiveNote: (state: NotesState, action: PayloadAction<Note>) => {
      state.active = state.active.filter(({ id }) => id !== action.payload.id);
      state.archived = state.archived.concat(action.payload);
    },
    editNote: (state: NotesState, action: PayloadAction<Note>) => {
      state.active = getSortedNotes(
        state.active.map((note) =>
          note.id === action.payload.id ? action.payload : note
        )
      );
    },
    archiveNotes: (state: NotesState) => {
      state.archived = getSortedNotes(state.archived.concat(state.active));
      state.active = [];
    },
    deleteNotes: (state: NotesState) => {
      state.active = [];
    },
  },
});

export const {
  createNote,
  removeNote,
  archiveNote,
  archiveNotes,
  deleteNotes,
  editNote,
} = notesSlice.actions;

export const selectActiveNotes = (state: RootState) => state.notes.active;
export const selectArchivedNotes = (state: RootState) => state.notes.archived;
export const selectEditedNote = (state: RootState) => state.notes.editedTodo;
export const selectPopupEditState = (state: RootState) =>
  state.notes.popupEditState;

export default notesSlice.reducer;
