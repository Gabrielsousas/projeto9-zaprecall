import React from "react";
import CardPergunta from "./components/CardPergunta";
import deck from "./deck";

export default function App() {
  return (
    <div onClick={() => mostrarPergunta()}>
      {deck.map((mapItem, indice) => <CardPergunta question={mapItem.question} answer={mapItem.answer} indice={indice}/>)}
    </div>
  );
}

function mostrarPergunta(){
  alert("Oiee")
}