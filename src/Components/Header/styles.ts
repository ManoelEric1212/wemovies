import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)} 180px;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(2)} 16px;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;
export const CartTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CartTitleText = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
export const CartSubTitleText = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  color: ${({ theme }) => theme.colors.textSubTitle};
`;
export const CartIcon = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;
export const CartIconContainer = styled.div`
  display: flex;
  padding: 8px;
  justify-content: right;
`;
