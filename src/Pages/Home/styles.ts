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

export const MoviesGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  grid-template-columns: repeat(3, minmax(240px, 1fr));
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(240px, 1fr));
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
