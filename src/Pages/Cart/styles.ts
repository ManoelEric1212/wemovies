import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  min-height: calc(100vh - 80px - 40px);
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Wrapper = styled.div`
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
