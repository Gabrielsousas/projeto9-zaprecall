import React from "react";
import CardPergunta from "./components/CardPergunta";
import deck from "./deck";

export default function App() {
  return (
    <div>
      {deck.map((mapItem, indice) => <CardPergunta question={mapItem.question} answer={mapItem.answer} indice={indice}/>)}
    </div>
  );
}
