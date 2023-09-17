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
import { SideNavList } from "@/utils/SideNavList";
import { useFetchSession } from "@/hooks/useSession";
import { useSearchParams } from "next/navigation";
import CreateButton from "@/components/button/CreateButton";

const LeftDrawer = () => {
  let { session } = useFetchSession();

  const searchParams = useSearchParams();
  const parentId = searchParams.get("id");

  const ownerEmail = session?.user?.email;

  return (
    <Box sx={{ overflow: "auto" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CreateButton
          parentId={parentId as string}
          ownerEmail={ownerEmail as string}
        />
      </Box>
      <Box
        sx={{
          pb: 2,
        }}
      >
        {SideNavList.map((item) => (
          <ListItemButton
            key={item.label}
            sx={{ py: 0, minHeight: 32 }}
            selected={item.label === "Authentication"}
          >
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
