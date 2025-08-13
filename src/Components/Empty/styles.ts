import styled from "styled-components";

export const EmptyStateWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px;
  gap: 24px;
  text-align: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.medium};
`;

export const EmptyImage = styled.img`
  max-width: 380px;
  width: 100%;
  height: auto;
`;

export const EmptyText = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  max-width: 320px;
  word-break: break-word;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonPrimary};
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: ${({ theme }) => theme.radius.small};
  font-size: ${({ theme }) => theme.font.sizes.small};
  cursor: pointer;
  transition: background 0.3s ease;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  min-width: 170px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonPrimaryHover};
  }
`;
