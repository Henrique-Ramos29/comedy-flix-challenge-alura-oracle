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


export default function Banner() {
     return(
      <>
        <BannerContainer>
            <ImageBanner src={GifBanner} alt="Imagem do Banner" />
        </BannerContainer>
      </>
     )
}