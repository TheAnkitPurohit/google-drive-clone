"use client";

import * as React from "react";
import {
  Box,
  List,
  Divider,
  ListItemButton,
  ListItem,
  Button,
} from "@mui/material";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { SideNavList } from "@/utils/SideNavList";

const LeftDrawer = () => {
  return (
    <Box sx={{ overflow: "auto" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button>Create</Button>
        <Button>Create</Button>
        <Button>Create</Button>
      </Box>
      <Box
        sx={{
          pb: 2,
        }}
      >
        {SideNavList.map((item) => (
          <ListItemButton key={item.label} sx={{ py: 0, minHeight: 32 }}>
            <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
            />
          </ListItemButton>
        ))}
      </Box>

      <Divider />
      <List>Get More Stuff</List>
    </Box>
  );
};

export default LeftDrawer;
