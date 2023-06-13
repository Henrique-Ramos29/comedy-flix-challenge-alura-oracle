import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components"
import VideoCardNovoCadastro from '../VideoCardNovoCadastro';

const ContainerCarousel = styled.div`
    max-width: 1292px;
    margin-left: 76px;
    margin-top: 20px;
    color:  #2A7AE4;
`

const TitleCategoria = styled.h2`
  margin-bottom: 15px;
  font-size: 40px;

`


const CarouselNovoCadastro = ({ lista, videoNovo, aoDeletar})  => {
    
    const settings = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow:  5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
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