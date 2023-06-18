import React from 'react'
import styled from 'styled-components'


const ContainerRodape = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;


`;

const ImageLogaRodape = styled.img`
     margin-top: 30px;
`;

const Paragrafo = styled.p`
    color: #2A7AE4;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;

`;

function Footer() {
    return(
         <ContainerRodape>
            <ImageLogaRodape src='https://fontmeme.com/permalink/230516/40c0d7fc81744e35de789354fc3426f1.png' alt='Logo' width='390' height='150'/>   
            <Paragrafo>Desenvolvindo Henrique Ramos</Paragrafo>
         </ContainerRodape>

    )
}

export default Footer; 
