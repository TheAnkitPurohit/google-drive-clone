import { database } from "@/utils/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

let files = collection(database, "files");

const useFetchFilesHook = (parentId: string, userEmail: string) => {
  const [fileList, setFileList] = useState<ArrayType>([]);

  const [folderList, setFolderList] = useState<ArrayType>([]);

  const getFolders = () => {
    if (userEmail) {
      if (!parentId) {
        onSnapshot(files, (response) => {
          const data = response.docs
            .map((item) => {
              return { ...item.data(), id: item.id };
            })
            .filter(
              (item: any) =>
                item.parentId === "" &&
                (item.sharedTo?.includes(userEmail) ||
                  item.userEmail === userEmail)
            );

          const folders = data.filter((item: any) => item.isFolder);
          const files = data.filter((item: any) => !item.isFolder);

          setFolderList(folders);
          setFileList(files);
        });
      } else {
        onSnapshot(files, (response) => {
          const data = response.docs
            .map((item) => {
              return { ...item.data(), id: item.id };
            })
            .filter(
              (item: any) =>
                item.parentId === parentId &&
                (item.sharedTo?.includes(userEmail) ||
                  item.userEmail === userEmail)
            );

          const folders = data.filter((item: any) => item.isFolder);
          const files = data.filter((item: any) => !item.isFolder);

          setFolderList(folders);
          setFileList(files);
        });
      }
    }
  };
  useEffect(() => {
    getFolders();
  }, [parentId, userEmail]);

  return { fileList, folderList };
};

export default useFetchFilesHook;
