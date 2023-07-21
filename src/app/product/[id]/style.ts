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

export const CustomButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
`;

export const ContainerImage = styled.div`
  width: fit-content;
  display: flex;
  padding: 16px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 22px;
  background: var(--background-white);
`;

export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    color: var(--black);
    font-size: 61.04px;
    font-weight: 700;
  }

  h1 + span {
    color: rgba(26, 31, 22, 0.5);
    font-size: 31.25px;
    font-weight: 500;
  }

  div + span {
    color: var(--font-dark, #1a1f16);
    font-size: 31.25px;
    font-weight: 500;
  }
`;

export const ButtonCartContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  button:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const Divider = styled.div`
  width: 858px;
  height: 3px;
  background: rgba(26, 31, 22, 0.5);
`;

export const DescriptionContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--black);
    font-size: 31.25px;
    font-weight: 500;
  }

  p {
    text-align: justify;
  }
`;
