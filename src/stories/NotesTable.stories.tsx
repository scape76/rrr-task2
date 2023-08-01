import { Meta, StoryObj } from "@storybook/react";
import NotesTable from "./NotesTable";

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

export const Active: Story = {
  args: {
    isArchived: false,
  },
};

export const Archived: Story = {
  args: {
    isArchived: true,
  },
};
