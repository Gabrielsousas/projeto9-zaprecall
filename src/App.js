import React from "react";
import CardPergunta from "./components/CardPergunta";
import deck from "./deck";
import Topo from "./components/Topo";
import styled from "styled-components";

export default function App() {
  return (
    <StyledDivApp>
      <Topo />
      <div>
        {deck.map((mapItem, indice) => (
          <CardPergunta
            question={mapItem.question}
            answer={mapItem.answer}
            indice={indice}
          />
        ))}
      </div>
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
