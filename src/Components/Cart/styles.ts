import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.medium};
`;

export const ProductImage = styled.img`
  width: 91px;
  height: 114px;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.radius.small};
`;

export const ProductCell = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
`;

export const Price = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
`;

export const QtyCell = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const QtyInput = styled.input`
  width: 48px;
  padding: 4px;
  text-align: center;
  border-radius: ${({ theme }) => theme.radius.small};
  border: 1px solid ${({ theme }) => theme.colors.input};
  font-size: ${({ theme }) => theme.font.sizes.medium};
`;

export const Btn = styled.button`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: 1rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  padding: 0;

  &:disabled {
    border-color: #ccc;
    color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const BtnLess = styled.img<{ disabled: boolean }>`
  height: 18px;
  width: 18px;
  cursor: pointer;
  &:disabled {
    border-color: #ccc;
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const BtnPlus = styled.img<{ disabled: boolean }>`
  height: 18px;
  width: 18px;
  cursor: pointer;
  &:disabled {
    border-color: #ccc;
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const SubtotalCell = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.primary};
`;

export const RemoveBtn = styled.div`
  cursor: pointer;
  width: 100%;
  img {
    height: 18px;
    width: 18px;
  }
  display: flex;
  justify-content: end;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: ${({ theme }) => theme.spacing(3)};
`;
export const FooterItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;
export const Divider = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.textSubTitle};
`;

export const TotalText = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.sizes.large};
  color: ${({ theme }) => theme.colors.primary};
  span:first-child {
    color: ${({ theme }) => theme.colors.textSubTitle};
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    width: 100%;

    span:first-child {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: ${({ theme }) => theme.font.sizes.large};
    }

    span:last-child {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: ${({ theme }) => theme.font.sizes.large};
    }
  }
`;

export const FinalizeButton = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 8px;
  border-radius: ${({ theme }) => theme.radius.medium};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  min-width: 170px;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonPrimaryHover};
  }
`;

export const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.textSubTitle};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const TitleSubtotalCell = styled.div`
  display: none;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.textSubTitle};
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  & > .image {
    justify-self: end;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 100px 1fr 1fr 1fr;
    gap: 0.5rem;
    & > .image {
      grid-row: span 4;
      width: 90px;
      height: 90px;
    }
    & > .product {
      display: contents;
      & > ${Title} {
        order: 1;
      }
      & > ${Price} {
        order: 2;
      }
    }
    & > .remove {
      order: 3;
    }
    & > .qty {
      order: 4;
    }
    & > .subtotal {
      order: 5;
      .subcell {
        display: flex;
      }
    }
  }
`;
