import React from "react";
import styled from "styled-components";

export default function Topo() {
  return (
    <StyledDiv>
      <div>
        <img src={"/projeto__zaprecall__recursos/assets/logo.png"}></img>
        <p>ZapRecall</p>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  > div {
    display: flex;
    flex-direction: row;
  }
  & img {
    height: 60px;
    width: 52px;
    border-radius: 0px;
  }
  & p {
    font-family: Righteous;
    font-size: 36px;
    font-weight: 400;
    line-height: 0;
    letter-spacing: -0.012em;
    text-align: center;
    max-height: 100%;
    color: #ffffff;
  }
`;
