import styled from "styled-components";
import { useState } from "react";
import { TiArrowLoop } from "react-icons/ti";


export default function CardPergunta(props) {
  const [showFirst, setShowFirst] = useState(true);
  const [mostrandoPergunta, setMostrandoPergunta] = useState(true);
  const [mostrandoResposta, setMostrandoResposta] = useState(true);
  const [fontColor, setFontColor] = useState("black");
  const [decoration, setDecoration] = useState("none");
  const [hasOnClick, setHasOnClick] = useState(true);
  const [selectedIcon, setSelectedIcon] = useState("/projeto__zaprecall__recursos/assets/seta_play.png");
  const [data, setData] = useState("play-btn")

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
    setDecoration("line-through");
    setHasOnClick(false);
    props.setPontos(props.pontos + 1);
    console.log(props.pontos);
    setSelectedIcon("/projeto__zaprecall__recursos/assets/icone_erro.png")
    setData("no-icon")
  }
  function clickQuaseNaoLembrei() {
    setShowFirst(true);
    setFontColor("#ff922e");
    setDecoration("line-through");
    setHasOnClick(false);
    props.setPontos(props.pontos + 1);
    console.log(props.pontos);
    setSelectedIcon("/projeto__zaprecall__recursos/assets/icone_quase.png")
    setData("partial-icon")
  }
  function clickZap() {
    setShowFirst(true);
    setFontColor("#2fbe34");
    setDecoration("line-through");
    setHasOnClick(false);
    props.setPontos(props.pontos + 1);
    console.log(props.pontos);
    console.log(selectedIcon);
    setSelectedIcon("/projeto__zaprecall__recursos/assets/icone_certo.png")
    setData("zap-icon")
  }

  return (
    <MainDiv data-test="flashcard"
      showFirst={showFirst}
      fontColor={fontColor}
      decoration={decoration}
      mostrandoPergunta={mostrandoPergunta}
      mostrandoResposta={mostrandoResposta}
    >
      <div className="div1">
        <StyleCardPergunta>
          <p data-test="flashcard-text">pergunta {props.indice + 1}</p>
          {showFirst ? (
            <img data-test={data} src={selectedIcon} onClick={hasOnClick ? mostrarPergunta : undefined} />
          ) : (
            selectedIcon
          )}
        </StyleCardPergunta>
      </div>

      <div className="div2">
        <StyleCardResposta>
          <div className="pergunta">
            <div>
              <p data-test="flashcard-text">{props.question}</p>
              <TiArrowLoop data-test="turn-btn" onClick={() => mostrarResposta()}></TiArrowLoop>
            </div>
          </div>
          <div className="resposta">
            <p data-test="flashcard-text">{props.answer}</p>
            <div className="buttons">
              <button data-test="no-btn" onClick={() => clickNaoLembrei()} className="nao-lembrei">
                Não lembrei
              </button>
              <button
              data-test="partial-btn"
                onClick={() => clickQuaseNaoLembrei()}
                className="quase-nao-lembrei"
              >
                Quase não lembrei
              </button>
              <button
              data-test="zap-btn" onClick={() => clickZap()} className="zap  ">
                Zap!
              </button>
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
