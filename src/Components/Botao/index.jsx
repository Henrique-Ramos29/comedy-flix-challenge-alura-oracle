import React from "react";
import styled from "styled-components";


const BotaoPrincipal = styled.button`
  background-color: #1C1C1C;
  border: solid var(--azul-primario);
  color: white;
  font-size: 19px;
  padding: 9px 20px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
    
`


export default function Botao({children}) {
    return(
      <BotaoPrincipal>{children}</BotaoPrincipal>
    )
    
}
