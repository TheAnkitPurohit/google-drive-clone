"use client";

import React, { ChangeEvent, useState } from "react";
import { Box, Button, Menu, MenuItem, Fab } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import CreateFolderDialog from "@/components/dialog/CreateFolderDialog";
import { useFetchSession } from "@/hooks/useSession";
import { addFolder } from "@/services/firebaseService";
import { fileUpload } from "@/services/storageService";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CreateButton = ({ parentId, ownerEmail }: FolderStructure) => {
  const { session } = useFetchSession();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [folderName, setFolderName] = useState<string>("");
  const [folderOpen, setFolderOpen] = React.useState(false);
  const [progress, setProgress] = useState(0);

  const handleUploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload(
      file,
      setProgress,
      parentId,
      session?.user?.email as string,
      ownerEmail
    );
  };

  const handleCreate = () => {
    let payload = {
      folderName: folderName,
      isFolder: true,
      parentId: parentId || "",
      userEmail: session?.user?.email as string,
      sharedTo: ownerEmail ? [ownerEmail] : [],
    };

    addFolder(payload);
    handleFolderClose();
  };

  const handleFolderOpen = () => {
    setFolderOpen(true);
  };

  const handleFolderClose = () => {
    setFolderName("");
    setFolderOpen(false);
    handleClose();
  };

  return (
    <div>
      <Box
        sx={{
          ml: 2,
        }}
      >
        <Button
          id="demo-positioned-button"
          variant="contained"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: "Background",
            py: 2,
          }}
          size="large"
        >
          New
        </Button>
      </Box>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem component="label">
          File Upload{" "}
          <VisuallyHiddenInput type="file" onChange={handleUploadFile} />
        </MenuItem>
        <MenuItem onClick={handleFolderOpen}>Create Folder</MenuItem>
      </Menu>

      <CreateFolderDialog
        folderName={folderName}
        setFolderName={setFolderName}
        open={folderOpen}
        handleClose={handleFolderClose}
        handleCreate={handleCreate}
      />
    </div>
  );
};

export default CreateButton;
