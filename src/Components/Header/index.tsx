import { Container, Title, CartButton, CartIcon, CartSubTitleText, CartTitleContainer, CartTitleText, CartIconContainer } from "./styles";
import CartIconImg from "../../assets/cartIconHeader.png"
import { useBuy } from "../../Context/BuyProvider";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { moviesSelected } = useBuy()

  const navigate = useNavigate();

  const handleToCart = () => {
    navigate('/Cart')
  }
  const handleToHome = () => {
    navigate('/')
  }
  return (
    <Container>
      <Title onClick={handleToHome}>WeMovies</Title>
      <CartButton>
        <CartTitleContainer>
          <CartTitleText>Meu Carrinho</CartTitleText>
          <CartSubTitleText>{`${moviesSelected.length} ${moviesSelected.length === 1 ? 'item' : 'itens'} `}</CartSubTitleText>
        </CartTitleContainer>
        <CartIconContainer>
          <CartIcon src={CartIconImg} onClick={handleToCart} />
        </CartIconContainer>
      </CartButton>
    </Container>
  );
}


