
import EmptyComponent from "../../Components/Empty";
import empty from "../../assets/empty.png"
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";



export function Finish() {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }

  return (
    <Container>
      <EmptyComponent
        title="Página não encontrada :("
        handleClick={handleBack}
        titleButtton="Voltar"
        img={empty} />
    </Container>
  );
}
