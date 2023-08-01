import { nanoid } from "nanoid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Category, Note } from "../types/note";
import { getCreatedTimeToString } from "lib/utils";

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [
    {
      id: nanoid(),
      category: Category.TASK,
      content: "tomatoes, bread 3/9/2021",
      createdAt: new Date(),
      name: "Shopping list",
      isArchived: false,
    },
    {
      id: nanoid(),
      category: Category.THOUGHT,
      content: "build a house 21/01/2022",
      createdAt: new Date(),
      name: "idk",
      isArchived: false,
    },
    {
      id: nanoid(),
      category: Category.THOUGHT,
      content: "build a house 23/09/2022 24/10/2022",
      createdAt: new Date(),
      name: "idk",
      isArchived: false,
    },
    {
      id: nanoid(),
      category: Category.IDEA,
      content: "plant a tree",
      createdAt: new Date(),
      name: "3",
      isArchived: false,
    },
    {
      id: nanoid(),
      category: Category.THOUGHT,
      content: "build a house 09/23/2022 10/24/2022",
      createdAt: new Date(),
      name: "idk",
      isArchived: true,
    },

    {
      id: nanoid(),
      category: Category.THOUGHT,
      content: "build a house",
      createdAt: new Date(),
      name: "idk",
      isArchived: true,
    },
    {
      id: nanoid(),
      category: Category.IDEA,
      content: "run",
      createdAt: new Date(),
      name: "idk",
      isArchived: true,
    },
  ],
};

function sortNotesByDate(notes: Note[]) {
  return [...notes].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );
}

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: (
      state: NotesState,
      action: PayloadAction<Pick<Note, "category" | "name" | "content">>
    ) => {
      state.notes = [
        {
          id: nanoid(),
          createdAt: new Date(),
          isArchived: false,
          ...action.payload,
        },
        ...state.notes,
      ];
    },
    removeNote: (state: NotesState, action: PayloadAction<Note["id"]>) => {
      state.notes = state.notes.filter(({ id }) => id !== action.payload);
    },
    archiveNote: (state: NotesState, action: PayloadAction<Note>) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? { ...note, isArchived: true } : note
      );
    },
    unarchiveNote: (state: NotesState, action: PayloadAction<Note>) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? { ...note, isArchived: false } : note
      );
    },
    editNote: (state: NotesState, action: PayloadAction<Note>) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    },
    archiveNotes: (state: NotesState) => {
      state.notes = state.notes.map((note) => ({ ...note, isArchived: true }));
    },
    unarchiveNotes: (state: NotesState) => {
      state.notes = state.notes.map((note) => ({ ...note, isArchived: false }));
    },
    deleteActiveNotes: (state: NotesState) => {
      state.notes = state.notes.filter((note) => note.isArchived);
    },
    deleteArchivedNotes: (state: NotesState) => {
      state.notes = state.notes.filter((note) => !note.isArchived);
    },
  },
});

export const {
  createNote,
  removeNote,
  archiveNote,
  archiveNotes,
  unarchiveNote,
  unarchiveNotes,
  editNote,
  deleteActiveNotes,
  deleteArchivedNotes,
} = notesSlice.actions;

export const selectActiveNotes = (state: RootState) =>
  sortNotesByDate(state.notes.notes).filter((note) => !note.isArchived);
export const selectArchivedNotes = (state: RootState) =>
  sortNotesByDate(state.notes.notes).filter((note) => note.isArchived);

export default notesSlice.reducer;
