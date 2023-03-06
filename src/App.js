import React from "react";
import CardPergunta from "./components/CardPergunta";
import deck from "./deck";
import Topo from "./components/Topo";
import Footer from "./components/Footer";
import styled from "styled-components";
import { useState } from "react";

export default function App() {
  const [pontos, setPontos] = useState(0);
  return (
    <StyledDivApp>
      <Topo />
      <div>
        {deck.map((mapItem, indice) => (
          <CardPergunta
            key={indice}
            question={mapItem.question}
            answer={mapItem.answer}
            indice={indice}
            pontos={pontos}
            setPontos={setPontos}
          />
        ))}
      </div>
      <Footer pontos={pontos} />
    </StyledDivApp>
  );
}

const StyledDivApp = styled.div`
  background-color: #fb6b6b;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
