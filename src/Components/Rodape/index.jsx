import React from 'react'
import styled from 'styled-components'


const ContainerRodape = styled.footer`
     align-items: center;
     margin-bottom: 20px;
`;

const ImageLogaRodape = styled.img`
     margin-top: 30px;
     align-items: center;
     margin-left: 549px;
`;

const Paragrafo = styled.p`
    color: #2A7AE4;
    text-align: center;
    font-weight: bold;
`;

function Footer() {
    return(
         <ContainerRodape>
            <ImageLogaRodape src='https://fontmeme.com/permalink/230516/40c0d7fc81744e35de789354fc3426f1.png' alt='Logo' />    
            <Paragrafo>Desenvolvindo Henrique Ramos</Paragrafo>
         </ContainerRodape>

    )
}

export default Footer; 
