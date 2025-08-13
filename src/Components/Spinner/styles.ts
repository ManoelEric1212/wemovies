import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const Loader = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #ffffff, #80808000);
  mask-image: radial-gradient(
    farthest-side,
    transparent calc(100% - 4px),
    black 0
  );
  -webkit-mask-image: radial-gradient(
    farthest-side,
    transparent calc(100% - 4px),
    black 0
  );
  animation: ${spin} 1s linear infinite;
`;
