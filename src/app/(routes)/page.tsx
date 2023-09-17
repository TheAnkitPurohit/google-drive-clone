"use client";

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
import { useSearchParams, useRouter } from "next/navigation";

import FolderIcon from "@mui/icons-material/Folder";

import SubHeading from "@/components/typography/SubHeading";
import { itemData } from "@/utils/SideNavList";
import { useFetchSession } from "@/hooks/useSession";
import useFetchFilesHook from "@/hooks/useFetchFilesHook";
import Image from "next/image";

const Page = () => {
  let { session } = useFetchSession();

  const searchParams = useSearchParams();
  const parentId = searchParams.get("id");

  const ownerEmail = session?.user?.email;

  const router = useRouter();

  const { fileList, folderList } = useFetchFilesHook(
    parentId || "",
    session?.user?.email as string
  );

  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };

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

      {folderList?.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <SubHeading text={"Folders"} />
          <List
            sx={{
              display: "flex",
              gap: 3,
            }}
          >
            {folderList?.map((item: File) => (
              <ListItem
                disablePadding
                sx={{
                  maxWidth: 240,
                  bgcolor: "ButtonFace",
                  borderRadius: 1,
                }}
                key={item?.id}
                onClick={() => router.push(`/?id=${item.id}`)}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary={item?.folderName} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {fileList?.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <SubHeading text={"Files"} />
          <ImageList sx={{ width: "100%" }} cols={3}>
            {fileList?.map((item: File) => (
              <ImageListItem
                key={item?.id}
                sx={{
                  borderRadius: 3,
                }}
              >
                <Image
                  onClick={() => openFile(item?.imageLink)}
                  src={`${item?.imageLink}?w=164&h=164&fit=crop&auto=format`}
                  width={164}
                  height={164}
                  alt={item?.imageName}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      )}
    </Box>
  );
};

export default Page;
