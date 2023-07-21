import styled from "styled-components";

export const ContainerImage = styled.div`
  display: flex;
  width: 203.536px;
  height: 254px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductContainer = styled.div`
  display: flex;
  padding: 16px 24px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 21px;
  background-color: var(--background-white);
`;

export const InfoContainer = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  h1 {
    color: var(--black);
    font-size: 31.25px;
    font-weight: 700;
  }

  h1 + span {
    font-size: 20px;
  }

  p + div {
    display: flex;
  }
`;

export const TotalItemContainer = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  span {
    color: var(--black);
    font-size: 20px;
  }
`;

export const Divider = styled.div`
  width: 858px;
  height: 3px;
  background: rgba(26, 31, 22, 0.5);
`;

export const CountItems = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 10px;

  button {
    background: transparent;
    cursor: pointer;
  }
`;
