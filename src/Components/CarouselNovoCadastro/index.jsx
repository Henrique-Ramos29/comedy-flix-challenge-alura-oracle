import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components"
import VideoCardNovoCadastro from '../VideoCardNovoCadastro';

const ContainerCarousel = styled.div`
    max-width: 1350px;
    margin-left: 75px;
    margin-top: 20px;
    color:  var(--azul-primario);
    margin: 50px;
`;

const TitleCategoria = styled.h2`
  margin-bottom: 15px;
  font-size: 40px;

`


const CarouselNovoCadastro = ({ lista, videoNovo, aoDeletar})  => {
    
    const settings = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow:  6,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
    
      ]
    } 

    return (
        videoNovo.length > 0 && <ContainerCarousel>
        <TitleCategoria className="titleCategoria">{lista.nome}</TitleCategoria>
        <Slider {...settings}>
          {videoNovo.map(( novoVideo, indice ) => {
              return  (
              <VideoCardNovoCadastro 
              key={indice}
              novoVideo={novoVideo}
              aoDeletar={aoDeletar}
              />
              )
            })}
        </Slider>

      </ContainerCarousel>
    )
}

export default CarouselNovoCadastro;