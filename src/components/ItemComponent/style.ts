"use client";

import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const ContainerImage = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  background: var(--background-white);
`;

export const InfoContainer = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  h1,
  span {
    color: var(--black);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  div {
    display: flex;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    button:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;
