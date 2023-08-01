import { Meta, ReactRenderer, StoryObj } from "@storybook/react";
import NotesTable from "./NotesTable";
import { Category, Note } from "types/note";

const meta: Meta<typeof NotesTable> = {
  title: "Example/Notes table",
  component: NotesTable,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotesTable>;

const notes = [
  {
    id: "12aosdkas",
    category: Category.TASK,
    content: "tomatoes, bread 3/9/2021",
    createdAt: new Date(),
    name: "Shopping list",
    isArchived: false,
  },
  {
    id: "asdokoa12",
    category: Category.THOUGHT,
    content: "build a house 21/01/2022",
    createdAt: new Date(),
    name: "idk",
    isArchived: false,
  },
  {
    id: "asdas12",
    category: Category.THOUGHT,
    content: "build a house 23/09/2022 24/10/2022",
    createdAt: new Date(),
    name: "idk",
    isArchived: false,
  },
  {
    id: "12312312",
    category: Category.IDEA,
    content: "plant a tree",
    createdAt: new Date(),
    name: "3",
    isArchived: false,
  },
  {
    id: "asda2",
    category: Category.THOUGHT,
    content: "build a house 09/23/2022 10/24/2022",
    createdAt: new Date(),
    name: "idk",
    isArchived: true,
  },
  {
    id: "asdasd12",
    category: Category.THOUGHT,
    content: "build a house",
    createdAt: new Date(),
    name: "idk",
    isArchived: true,
  },
  {
    id: "123",
    category: Category.IDEA,
    content: "run",
    createdAt: new Date(),
    name: "idk",
    isArchived: true,
  },
];

export const Active: Story = {
  args: {
    notes: notes.filter((n) => !n.isArchived),
    isArchived: false,
  },
};

export const Archived: Story = {
  args: {
    notes: notes.filter((n) => n.isArchived),
    isArchived: true,
  },
};

export const Loading: Story = {
  args: {
    notes,
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    notes: [],
  },
};
