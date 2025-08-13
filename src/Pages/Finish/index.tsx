
import EmptyComponent from "../../Components/Empty";
import finish from "../../assets/finish.png"
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
        title="Compra realizada com sucesso!"
        handleClick={handleBack}
        titleButtton="Voltar"
        img={finish} />
    </Container>
  );
}
