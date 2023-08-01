import type { Meta, StoryObj } from "@storybook/react";
import NoteElementList from "./NoteElementList";
import { Category } from "types/note";

const meta: Meta<typeof NoteElementList> = {
  title: "Example/Note element",
  component: NoteElementList,
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

type Story = StoryObj<typeof NoteElementList>;

const note = {
  id: "2",
  category: Category.TASK,
  content: "tomatoes, bread 3/9/2021",
  createdAt: new Date(),
  name: "Shopping list",
  isArchived: false,
};

export const Active: Story = {
  args: {
    ...note,
    isLoading: false,
  },
};

export const Archived: Story = {
  args: {
    ...note,
    isArchived: true,
    isLoading: false,
  },
};

export const Skeleton: Story = {
  args: {
    // ...note,
    // isArchived: true,
    isLoading: true,
  },
};

