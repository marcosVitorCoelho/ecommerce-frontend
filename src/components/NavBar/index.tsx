"use client";

import { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import * as S from "./style";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import { usePathname } from "next/navigation";
import LogoutIcon from "@/assets/LogoutIcon.svg";
import UserAuthenticationContext from "@/contexts/UserAuthContext";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const { logoff } = useContext(UserAuthenticationContext);
  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  const handleDrawerOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <S.Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Link href="/">
              <ListItemButton
                sx={{
                  justifyContent: "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                  }}
                >
                  <Image src={Logo} alt="site logo" />
                </ListItemIcon>
              </ListItemButton>
            </Link>
          </ListItem>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={handleDrawerOpen}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary={"Menu"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              selected={pathName === "/"}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Link href={"/"}>
                  <WindowIcon />
                </Link>
              </ListItemIcon>
              <ListItemText primary={"Home"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }} onClick={logoff}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Link href={"/"}>
                  <Image src={LogoutIcon} alt="logout icon" />
                </Link>
              </ListItemIcon>
              <ListItemText primary={"Sair"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </S.Drawer>
    </Box>
  );
}

/* export default function NavBar() {
  return (
    <S.NavBar>
      <LogoutIcon />
    </S.NavBar>
  );
}
 */
