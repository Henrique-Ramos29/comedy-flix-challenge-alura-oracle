import React from "react";
import styled from "styled-components"
import {AiFillCloseCircle} from 'react-icons/ai'

const Container = styled.div`
   position: relative;
`;

const Div = styled.div` 
  align-items: center;
 

`;

const ImageC = styled.img`

`;

const TitleV = styled.h2`

`;

const A = styled.a`
  list-style: none;

`;

const VideoCardNovoCadastro = ({ novoVideo, imagem, nome, video, aoDeletar }) => {
    return(
    <>
        <Container>
            <AiFillCloseCircle 
              size={23} 
              onClick={() => aoDeletar(novoVideo.id)}
            />
         <Div>
         <A href={novoVideo.video}>
            <ImageC src={novoVideo.imagem} alt={novoVideo.nome} width="200" height="350" />
            <TitleV>{novoVideo.nome}</TitleV>
         </A>
         </Div>
        </Container>
    </>
    )
}

export default VideoCardNovoCadastro;