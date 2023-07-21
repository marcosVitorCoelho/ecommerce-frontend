import styled from "styled-components";

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
  gap: 20px;
`;

export const TitleContainer = styled.div`
  width: 100%;

  h1 {
    color: var(--black);
    font-size: 48.83px;

    font-weight: 400;
  }
`;

export const Divider = styled.div`
  width: 858px;
  height: 3px;
  background: rgba(26, 31, 22, 0.5);
`;

export const BagContainer = styled.div`
  width: 30%;
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  align-self: stretch;

  h2 {
    font-size: 16px;
  }

  button,
  a {
    width: 100px;
    cursor: pointer;
    background: var(--background-white);
    border-radius: 8px;
    padding: 8px 16px;
    display: flex;
    justify-content: center;
  }
`;
