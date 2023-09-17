interface Button {
  btnClass?: string;
  title: string;
  onClick?: (event: React.FormEvent) => void;
}

interface Progress {
  progress: number;
}

interface AuthInteface {
  clientId: string;
  clientSecret: string;
}

interface ArrayType {
  map: Function;
  length: number;
}

interface FolderStructure {
  parentId: string;
  ownerEmail: string;
}

interface File {
  imageLink: string;
  imageName: string;
  isFolder: boolean;
  folderName: string;
  id: string;
  sharedTo: Array<string>;
  userEmail: string;
}
