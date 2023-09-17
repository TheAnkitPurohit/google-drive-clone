import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

import { People, Dns, PermMedia, Public } from "@mui/icons-material";

export const SideNavList = [
  // {
  //   icon: "",
  //   label: "My Drive",
  //   path: "/",
  // },
  // {
  //   icon: "",
  //   label: "Computers",
  //   path: "/",
  // },
  // {
  //   icon: "",
  //   label: "Shared with me",
  //   path: "/",
  // },
  // {
  //   icon: "",
  //   label: "Recent",
  //   path: "/",
  // },
  { icon: <People />, label: "Authentication" },
  { icon: <Dns />, label: "Database" },
  { icon: <PermMedia />, label: "Storage" },
  { icon: <Public />, label: "Hosting" },
  {
    icon: <StarBorderOutlinedIcon />,
    label: "Starred",
    path: "/",
  },
  {
    icon: <DeleteIcon />,
    label: "Bin",
    path: "/",
  },
];
