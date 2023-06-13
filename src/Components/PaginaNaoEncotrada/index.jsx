import styled from "styled-components";
import ImgPagina from "../../imagem/Pagina.gif"
import Botao from "../Botao";
import { Link } from "react-router-dom";


const ContainerPagina = styled.div`

`;

const ImagePagina = styled.img`
     width: 100%;
`;

const TitlePagina = styled.h1`
    position: absolute;
    color: #FFDE59;
    font-size: 59px;
    text-align: center;
    left: 117px;
    margin-top: 200px;       
`;

const DivButton = styled.div`
   margin-left: 40px;
`



const PaginaNaoEncontrada = () => {
    return(
        <ContainerPagina>
            <TitlePagina>Pagina Não Encotrada</TitlePagina>
              <DivButton>
                <Link to={'/'}>
                 <Botao>Volta</Botao>
                </Link>
              </DivButton>
              <ImagePagina src={ImgPagina} alt="Imagem da pagina" />
        </ContainerPagina>
    )

}

export default PaginaNaoEncontrada;