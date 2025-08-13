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
