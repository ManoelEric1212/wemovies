import { EmptyStateWrapper, EmptyText, EmptyImage, Button } from "./styles";

interface EmptyComponentProps {
  title: string;
  handleClick: () => void;
  titleButtton: string;
  img: string;
}
export default function EmptyComponent({ handleClick, title, titleButtton, img }: EmptyComponentProps) {
  return (
    <EmptyStateWrapper>
      <EmptyText>{title}</EmptyText>
      <EmptyImage src={img} alt="Nenhum item encontrado" />
      <Button onClick={handleClick}>{titleButtton}</Button>
    </EmptyStateWrapper>
  )
}