import * as React from "react";
import { Button, buttonVariants } from "./ui/button";
import { Pen } from "lucide-react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "components/ui/alert-dialog";
import { Icons } from "./Icons";
import { cn } from "lib/utils";
import CreateNoteForm from "./forms/CreateNoteForm";

export default function CreateNoteButton() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger>
        <Button variant={"ghost"}>
          <Icons.plus className="mr-2 h-4 w-4"/>
          Create note
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
          <CreateNoteForm setIsOpen={setIsOpen} />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
