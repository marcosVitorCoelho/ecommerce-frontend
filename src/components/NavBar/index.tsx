"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import * as S from "./style";
import Box from "@mui/material/Box";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
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
import Bag from "@/assets/Bag.svg";
import UserAuthenticationContext from "@/contexts/UserAuthContext";
import { checkUserAuth } from "@/utils/checkUserAuth";
import Badge from "@mui/material/Badge";
import CartContext from "@/contexts/CartContext";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const { handleSessionUser } = useContext(UserAuthenticationContext);
  const { cartItems } = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);
  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  const handleDrawerOpen = () => {
    setOpen((prev) => !prev);
  };

  const getTotalItems = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantityInCart, 0);
  }, [cartItems]);

  useEffect(() => {
    setTotalItems(getTotalItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTotalItems]);

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
        <S.CustomList>
          <div>
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
            <Link href={"/"}>
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
                    <WindowIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Home"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href={"/cart"}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  selected={pathName === "/cart"}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Badge
                      badgeContent={totalItems}
                      color="primary"
                      invisible={totalItems > 0 ? false : true}
                    >
                      <Image src={Bag} alt="Bag icon" />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText
                    primary={"Bag"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </div>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={handleSessionUser}
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
                {checkUserAuth() ? (
                  <Image src={LogoutIcon} alt="logout icon" />
                ) : (
                  <LoginRoundedIcon />
                )}
              </ListItemIcon>
              <ListItemText
                primary={checkUserAuth() ? "Logout" : "Login"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </S.CustomList>
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
