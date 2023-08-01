import * as React from "react";
import { Button } from "./ui/button";
import { useAppDispatch } from "hooks/redux";
import { Trash2 } from "lucide-react";
import { deleteActiveNotes, deleteArchivedNotes } from "redux/noteSlice";

interface DeleteNotesButtonProps {
  isArchived: boolean;
}

const DeleteNotesButton: React.FC<DeleteNotesButtonProps> = ({
  isArchived,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      size={"icon"}
      variant={"destructive"}
      onClick={() =>
        dispatch(isArchived ? deleteArchivedNotes() : deleteActiveNotes())
      }
    >
      <Trash2 className="w-4 h-4" />
    </Button>
  );
};

export default DeleteNotesButton;
