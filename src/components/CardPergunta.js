import deck from "../deck";

export default function CardPergunta(props) {
  return (
    <div>
      <div>pergunta {props.indice + 1}</div>
      <div>
        <div>{props.question}</div>
        <div>{props.answer}</div>
      </div>
    </div>
  );
}
