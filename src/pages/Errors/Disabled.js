import {Link} from 'react-router-dom';

function Disabled() {
  return (
    <>
      <h1>PEGADINHA!</h1>
      <p>Então você estava tentando acessar uma página desativada, não é mesmo? NÃO TEM NADA AQUI!!!1</p>
      <p>Faça o favor de voltar para a <Link to="/">página inicial</Link> ou escolha um dos itens do menu, mas agora sem tentar bulir com o sistema!</p>
    </>
  );
}

export default Disabled;
