import styled from "styled-components";
import { useState } from "react";
import { GrPlay } from "react-icons/gr";
import { TiArrowLoop } from "react-icons/ti";

export default function CardPergunta(props) {
  const [showFirst, setShowFirst] = useState(true);
  const [mostrandoPergunta, setMostrandoPergunta] = useState(true);
  const [mostrandoResposta, setMostrandoResposta] = useState(true);
  const [fontColor, setFontColor] = useState("black");
  const [decoration, setDecoration] = useState("none");
  const [hasOnClick, setHasOnClick] = useState(true);

  function mostrarPergunta() {
    setShowFirst((prevShowFirst) => !prevShowFirst);
  }

  function mostrarResposta() {
    setMostrandoPergunta((prevMostrandoResposta) => !prevMostrandoResposta);
    console.log(mostrandoPergunta);
  }

  function clickNaoLembrei() {
    setShowFirst(true);
    setFontColor("#ff3030");
    setDecoration("line-through")
    setHasOnClick(false)
  }
  function clickQuaseNaoLembrei() {
    setShowFirst(true);
    setFontColor("#ff922e");
    setDecoration("line-through")
    setHasOnClick(false)
  }
  function clickZap() {
    setShowFirst(true);
    setFontColor("#2fbe34");
    setDecoration("line-through")
    setHasOnClick(false)
  }

  return (
    <MainDiv
      showFirst={showFirst}
      fontColor={fontColor}
      decoration={decoration}
      mostrandoPergunta={mostrandoPergunta}
      mostrandoResposta={mostrandoResposta}
    >
      <div className="div1">
        <StyleCardPergunta>
          <p>pergunta {props.indice + 1}</p>
          <GrPlay onClick={hasOnClick ? mostrarPergunta : undefined} />
        </StyleCardPergunta>
      </div>

      <div className="div2">
        <StyleCardResposta>
          <div className="pergunta">
            <div>
              <p>{props.question}</p>
              <TiArrowLoop onClick={() => mostrarResposta()}></TiArrowLoop>
            </div>
          </div>
          <div className="resposta">
            <p>{props.answer}</p>
            <div className="buttons">
              <buttom onClick={() => clickNaoLembrei()} className="nao-lembrei">
                Não lembrei
              </buttom>
              <buttom
                onClick={() => clickQuaseNaoLembrei()}
                className="quase-nao-lembrei"
              >
                Quase não lembrei
              </buttom>
              <buttom onClick={() => clickZap()} className="zap  ">
                Zap!
              </buttom>
            </div>
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
  background: #ffffff;
  box-shadow: 0px 4px 5px 0px #00000026;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 5px;
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
    color: ${({ fontColor }) => fontColor}; 
    text-decoration: ${({ decoration }) => decoration};
  }

  & .div2 {
    display: ${({ showFirst }) => (showFirst ? "none" : "block")};
  }

  & .pergunta {
    display: ${({ mostrandoPergunta }) =>
      mostrandoPergunta ? "block" : "none"};
  }

  & .resposta {
    width: 100%;
    display: ${({ mostrandoPergunta }) =>
      mostrandoPergunta ? "none" : "block"};
  }

  & .buttons {
    display: flex;
    gap: 5px;
    box-sizing: border-box;
    padding: 5px;
  }
  & .nao-lembrei {
    display: inline-block;
    height: 37px;
    width: 85px;
    border-radius: 5px;
    background: #ff3030;
    color: #ffffff;
    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
  }
  & .quase-nao-lembrei {
    display: inline-block;
    background: #ff922e;
    height: 37px;
    width: 85px;
    border-radius: 5px;
    color: #ffffff;
    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
  }
  & .zap {
    display: inline-block;
    background: #2fbe34;
    height: 37px;
    width: 85px;
    border-radius: 5px;
    color: #ffffff;
    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
