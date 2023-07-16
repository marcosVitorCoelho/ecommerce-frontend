"use client";

import { styled } from "styled-components";
import { InputBase } from "@mui/material";
import { styled as styledMUI, alpha } from "@mui/material/styles";

export const MainTag = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ContainerPage = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SearchBox = styled.div``;

export const BootstrapInput = styledMUI(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    borderRadius: 13,
    position: "relative",
    backgroundColor: "var(--background-white)",
    fontSize: 16,
    width: "475px",
    padding: "8px 16px;",
    transition: theme.transitions.create(["background-color", "box-shadow"]),
    "&:focus": {
      boxShadow: `${alpha("#1A1F16", 0.15)} 0 4px 1rem 0`,
    },
  },
}));
