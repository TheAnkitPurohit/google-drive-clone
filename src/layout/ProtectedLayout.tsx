"use client";

import React, { useState } from "react";
import {
  Box,
  Toolbar,
  Typography,
  Drawer,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";

import Navbar from "@/components/header/Navbar";
import CustomThemeProvider from "@/providers/theme-provider";
import LeftDrawer from "@/components/drawer/LeftDrawer";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const anchorSide = "left";
  const isMobile = useMediaQuery("(max-width:600px)");

  const [state, setState] = useState<boolean>(isMobile ? false : true);
  const [drawerWidth, setDrawerWidth] = useState<number>(isMobile ? 0 : 240);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      console.log("I passed");

      setState(open);
      setDrawerWidth(open ? 240 : 0);
    };

  return (
    <CustomThemeProvider>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar state={state} toggleDrawer={toggleDrawer} />
        <Drawer
          anchor={anchorSide}
          open={state}
          onClose={toggleDrawer(false)}
          variant={isMobile ? "temporary" : "persistent"}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />

          <LeftDrawer />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: "100%" }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </CustomThemeProvider>
  );
};

export default ProtectedLayout;
