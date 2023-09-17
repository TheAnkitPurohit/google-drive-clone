/* eslint-disable react/no-children-prop */
"use client";

import { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

import ProtectedLayout from "@/layout/ProtectedLayout";

interface LayoutProviderProps {
  children: React.ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isMounted}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return <ProtectedLayout children={children} />;
};

export default LayoutProvider;
