"use client";

import { styled as styledMUI, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const openedMixin = (theme: Theme): CSSObject => ({
  width: 200,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  borderRadius: "8px",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "72px",
});

export const Drawer = styledMUI(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
    backgroundColor: "var(--background-white)",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: "none",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    height: "95%",
    flex: "1 0 auto",
    zIndex: 1200,
    position: "fixed",
    top: "16px",
    outline: 0,
    left: "16px",
    borderRadius: "8px",
  },
}));
