import { SpinnerContainer, Loader } from "./styles";

interface SpinnerProps {
  size?: number;
}

export function Spinner({ size = 40 }: SpinnerProps) {
  return (
    <SpinnerContainer>
      <Loader size={size} />
    </SpinnerContainer>
  );
}
