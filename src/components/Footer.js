import deck from "../deck";
import styled from "styled-components";

export default function Footer(props) {
  return (
    <StyledFooter>
      <StyledDiv>
        <p>
          {props.pontos} / {deck.length} CONCLUÍDOS
        </p>
      </StyledDiv>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  display: flex; /* adiciona display flex para ocupar 100% da largura */
`;

const StyledDiv = styled.div`
  height: 70px;
  width: 100vw;
  background-color: white;
  margin-top: 10px;
  text-align: center;
`;
