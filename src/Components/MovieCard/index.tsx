import { useBuy } from "../../Context/BuyProvider";
import { Card, Title, Price, Button, Image, IconButton, Cart } from "./styles";
import CartIcon from "../../assets/cartIcon.png";


interface MovieCardProps {
  id: number;
  title: string;
  price: number;
  image: string;

}

export function MovieCard({ id, title, price, image }: MovieCardProps) {

  const { addToCart, removeFromCart, isInCart } = useBuy();
  const selected = isInCart(id);

  const formatPrice = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const handleClick = () => {
    if (selected) {
      removeFromCart(id);
    } else {
      addToCart({ id, title, price, image });
    }
  };

  return (
    <Card>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Price>{formatPrice(price)}</Price>
      <Button onClick={handleClick} selected={selected}>
        <Cart>
          <IconButton src={CartIcon} alt="Carrinho" />
          {selected ? 1 : 0}
        </Cart>
        Adicionar ao carrinho
      </Button>
    </Card>
  );
}