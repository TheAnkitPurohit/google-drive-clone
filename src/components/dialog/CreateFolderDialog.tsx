import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

interface CreateFolderDialogProps {
  folderName: string;
  setFolderName: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  handleClose: () => void;
  handleCreate: () => void;
}

const CreateFolderDialog = ({
  open,
  handleClose,
  folderName,
  setFolderName,
  handleCreate,
}: CreateFolderDialogProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>New Folder</DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            visibility: "hidden",
          }}
        >
          To subscribe to this website, please enter your email address here
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          type="text"
          fullWidth
          variant="outlined"
          value={folderName}
          required
          onChange={(e) => setFolderName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCreate}>Create</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateFolderDialog;
