import React from "react";
import styled from "styled-components";
import GifBanner from "../../imagem/flix.gif"




const BannerContainer = styled.main`
   position: relative;
`;

const ImageBanner = styled.img`
   width: 100%;
   opacity: 40%;

`;

const Paragrafo = styled.p`
  position: absolute;
  color: var(--azul-primario);
  font-size: 60px;
  top: 700px;
  left: 305px;
  font-weight: bold;

`;


export default function Banner() {
     return(
      <>
        <BannerContainer>
            <ImageBanner src={GifBanner} alt="Imagem do Banner" />
            <Paragrafo>Comedy Flix videos selecionados</Paragrafo>
        </BannerContainer>
      </>
     )
}