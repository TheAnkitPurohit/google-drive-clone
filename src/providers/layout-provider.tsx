/* eslint-disable react/no-children-prop */
"use client";

import ProtectedLayout from "@/layout/ProtectedLayout";
import { useEffect, useState } from "react";

interface LayoutProviderProps {
  children: React.ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <ProtectedLayout children={children} />;
};

export default LayoutProvider;
