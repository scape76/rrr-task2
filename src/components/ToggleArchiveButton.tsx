import * as React from "react";
import { Button } from "./ui/button";
import { useAppDispatch } from "hooks/redux";
import { Archive, ArchiveRestore, Trash2 } from "lucide-react";
import {
  archiveNotes,
  deleteActiveNotes,
  deleteArchivedNotes,
  unarchiveNotes,
} from "redux/noteSlice";

interface ToggleArchiveButtonProps {
  isArchived: boolean;
}

const ToggleArchiveButton: React.FC<ToggleArchiveButtonProps> = ({
  isArchived,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      size={"icon"}
      onClick={() => dispatch(isArchived ? unarchiveNotes() : archiveNotes())}
    >
      {isArchived ? (
        <ArchiveRestore className="w-4 h-4" />
      ) : (
        <Archive className="w-4 h-4" />
      )}
    </Button>
  );
};

export default ToggleArchiveButton;
