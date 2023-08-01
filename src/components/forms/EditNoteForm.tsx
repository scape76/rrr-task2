import * as React from "react";
import { Button } from "components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import { Input } from "components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { noteSchema } from "lib/validations/note";
import * as z from "zod";
import { Category, Note } from "types/note";
import { Textarea } from "components/ui/textarea";
import { editNote } from "redux/noteSlice";
import { useAppDispatch } from "hooks/redux";

type Inputs = z.infer<typeof noteSchema>;

interface EditNoteFormProps {
  note: Note;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditNoteForm: React.FC<EditNoteFormProps> = ({ note, setIsOpen }) => {
  const dispatch = useAppDispatch();
  const { id, category, content, created, createdInMilliseconds, name } = note;

  const form = useForm<Inputs>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      name: name,
      content: content,
      category: category,
    },
  });

  function onSubmit(data: Inputs) {
    setIsOpen(false);
    dispatch(
      editNote({
        id,
        category: data.category as Category,
        content: data.content,
        name: data.name,
        created,
        createdInMilliseconds,
      })
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Build a house" {...field} />
              </FormControl>
              <FormDescription>This is your note name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Textarea placeholder="Don't forget to..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="task">Task</SelectItem>
                  <SelectItem value="thought">Thought</SelectItem>
                  <SelectItem value="idea">Idea</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button className="w-full">Save</Button>
      </form>
    </Form>
  );
};

export default EditNoteForm;
