import React from "react";
import styled from 'styled-components'
import Botao from "../Botao";
import { Link } from "react-router-dom";




const ContainerCabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 21px;

`

const ImageCabecalho = styled.img`
  background: transparent;
  border-radius: 3px;

`
  


export default function Cabecalho () {
    return(
      
       <ContainerCabecalho>
        <Link to={'/'}>
         <ImageCabecalho src="https://fontmeme.com/permalink/230516/40c0d7fc81744e35de789354fc3426f1.png" alt="logo" width='200' height='70'/>
        </Link>
        <Link to={'/cadastra'} >
         <Botao>Novo Video</Botao>
        </Link>
       </ContainerCabecalho>
      
    )
}

 