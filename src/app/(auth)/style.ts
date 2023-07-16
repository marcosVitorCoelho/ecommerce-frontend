"use client";

import { Stack } from "@mui/material";
import styled from "styled-components";

interface IFormContainer {
  usersignup?: boolean;
}

export const FormContainer = styled(Stack)<IFormContainer>`
  gap: 10px;
  width: 500px;
  height: max-content;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: var(--background-white);
  padding: 16px;

  h1 {
    font-size: 1.5rem;
  }
`;

export const FormInputContainer = styled(Stack)`
  gap: 10px;
`;
