import type { Meta, StoryObj } from "@storybook/react";

import EditNoteForm from "./Form";
import { IceCream } from "lucide-react";
import { Category } from "types/note";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof EditNoteForm> = {
  title: "Example/Edit note form",
  component: EditNoteForm,
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
type Story = StoryObj<typeof EditNoteForm>;

export const Default: Story = {
  args: {
    name: "Shopping list",
    content: "tomatoes, cucumbers",
    category: Category.TASK,
  },
};

export const Invalid: Story = {
  args: {
    name: "",
    content: "",
    category: Category.THOUGHT,
    isInvalid: true
  }
}