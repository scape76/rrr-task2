import * as React from "react";
import { Button, buttonVariants } from "./ui/button";
import { Pen } from "lucide-react";
import { useAppDispatch } from "hooks/redux";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "components/ui/alert-dialog";
import EditNoteForm from "components/forms/EditNoteForm";
import { Note } from "types/note";
import { Icons } from "./Icons";
import { cn } from "lib/utils";

interface EditNoteButtonProps {
  note: Note;
}

export function EditNoteButton({ note }: EditNoteButtonProps) {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger>
        <Button size={"icon"}>
          <Pen className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="relative">
          <Icons.x
            onClick={() => setIsOpen(false)}
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "absolute -top-2 -right-2 h-6 w-6 cursor-pointer"
            )}
          />
          <EditNoteForm note={note} setIsOpen={setIsOpen} />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
