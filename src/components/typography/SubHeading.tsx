import { Typography } from "@mui/material";
import React from "react";

interface SubHeadingProps {
  text: string;
}

const SubHeading = ({ text }: SubHeadingProps) => {
  return (
    <Typography variant="h6" component="h3">
      {text}
    </Typography>
  );
};

export default SubHeading;
