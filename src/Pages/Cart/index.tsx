
import { useNavigate } from "react-router-dom";
import EmptyComponent from "../../Components/Empty";
import EmptyStatePNG from "../../assets/empty.png";
import { useBuy } from "../../Context/BuyProvider";
import {
  Container,
} from "./styles";
import { CartComponent } from "../../Components/Cart";


export function Cart() {
  const { moviesSelected, removeFromCart } = useBuy()
  const navigate = useNavigate()
  const handleToHome = () => {
    navigate('/')
  }

  return (
    <Container>
      {moviesSelected.length ? (
        <CartComponent moviesSelected={moviesSelected} onRemove={removeFromCart} />

      ) : (
        <EmptyComponent
          title="Parece que não há nada por aqui :("
          handleClick={handleToHome}
          titleButtton="Voltar"
          img={EmptyStatePNG}
        />
      )}


    </Container>
  );
}
