import styled from "styled-components";
import { useState } from "react";

export default function CardPergunta(props) {
  const [showFirst, setShowFirst] = useState(true);
  const [mostrandoPergunta, setMostrandoPergunta] = useState(true);
  const [mostrandoResposta, setMostrandoResposta] = useState(true);

  function mostrarPergunta() {
    setShowFirst((prevShowFirst) => !prevShowFirst);
  }

  function mostrarResposta() {
    setMostrandoPergunta((prevMostrandoResposta) => !prevMostrandoResposta);
    console.log(mostrandoPergunta);
  }

  function mostrarResultado(){
    setShowFirst(true)
  }

  return (
    <MainDiv
      showFirst={showFirst}
      mostrandoPergunta={mostrandoPergunta}
      mostrandoResposta={mostrandoResposta}
    >
      <div className="div1">
        <StyleCardPergunta onClick={() => mostrarPergunta()}>
          <p>pergunta {props.indice + 1}</p>
        </StyleCardPergunta>
      </div>

      <div className="div2">
        <StyleCardResposta>
          <div onClick={() => mostrarResposta()} className="pergunta">
            {props.question}
          </div>
          <div onClick={() => mostrarResultado()} className="resposta">
            {props.answer}
          </div>
        </StyleCardResposta>
      </div>
    </MainDiv>
  );
}

const StyleCardPergunta = styled.div`
  height: 65px;
  width: 300px;
  border-radius: 5px;
  background-color: lightblue;
  box-shadow: 0px 4px 5px 0px #00000026;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyleCardResposta = styled.div`
  height: 131px;
  width: 300px;
  border-radius: 5px;
  background: #ffffd4;
`;

const MainDiv = styled.div`

  & .div1 {
    display: ${({ showFirst }) => (showFirst ? "block" : "none")};
  }

  & .div2 {
    display: ${({ showFirst }) => (showFirst ? "none" : "block")};
  }

  & .pergunta {
    display: ${({ mostrandoPergunta }) =>
      mostrandoPergunta ? "block" : "none"};
  }

  & .resposta {
    display: ${({ mostrandoPergunta }) =>
      mostrandoPergunta ? "none" : "block"};
  }
`;
