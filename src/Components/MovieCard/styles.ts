import styled from "styled-components";
interface ButtonProps {
  selected: boolean;
}
export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.medium};
  padding: ${({ theme }) => theme.spacing(3)};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;
export const Image = styled.img`
  max-width: 180px;
  max-height: 180px;
  object-fit: contain;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  text-align: center;
`;
export const Price = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.buttonSecondary : theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 8px;
  border-radius: ${({ theme }) => theme.radius.small};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.sizes.small};
  transition: background-color 0.3s ease;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonPrimaryHover};
  }
`;
export const IconButton = styled.img`
  height: 16px;
`;
export const Cart = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
`;
