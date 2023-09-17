import React from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import FolderIcon from "@mui/icons-material/Folder";

import SubHeading from "@/components/typography/SubHeading";
import { itemData } from "@/utils/SideNavList";

const page = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h4" component="h1">
        My Drive
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <SubHeading text="Folders" />

        <List
          sx={{
            display: "flex",
            gap: 3,
          }}
        >
          {[1, 2, 3].map((item) => (
            <ListItem
              disablePadding
              sx={{
                maxWidth: 240,
                bgcolor: "ButtonFace",
                borderRadius: 1,
              }}
              key={item}
            >
              <ListItemButton>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <SubHeading text="Files" />

        <ImageList sx={{ width: "100%" }} cols={3}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              sx={{
                borderRadius: 3,
              }}
            >
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default page;
