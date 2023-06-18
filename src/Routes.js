import Banner from './Components/Banner';
import Footer from './Components/Rodape';
import FormularioCadastraVideo from './Components/FormularioVideo';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Routes.css';
import './reset.css'
import CarouselNovoCadastro from './Components/CarouselNovoCadastro';
import PaginaPadrao from './PaginaPadrao';
import ScrollToTop from './Components/ScrollToTop';
import PaginaNaoEncontrada from './Components/PaginaNaoEncotrada';
import { v4 as uuidv4 } from 'uuid';

function AppRoutes() {

  const [listaCategoria, setListaCategoria] = useState([
    {
      id: uuidv4(),
      nome: 'Classic',
    },
    {
      id: uuidv4(),
      nome: 'Filme',
    },
    {
      id: uuidv4(),
      nome: 'Filme Nacional',
    }
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: 'Eu a patroa e as crianças',
      imagem: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/2D0840F2BBF52D8B5F57E3B89E923DE952D1790D9B01299F3EA0AF5798A3B985/scale?width=506&aspectRatio=2.00&format=jpeg',
      video: 'https://www.youtube.com/watch?v=IW8fwVdtbgw&t=6s',
      lista: listaCategoria[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Todo mundo odeia o cris',
      imagem: 'https://br.web.img2.acsta.net/pictures/14/02/04/14/08/054280.jpg',
      video: 'https://www.youtube.com/watch?v=UOof-43WLIA',
      lista: listaCategoria[0].nome
    },
    {
      id: uuidv4(),
      nome: 'iCarly',
      imagem: 'https://kbimages1-a.akamaihd.net/30f37fed-8e55-46d5-ab6e-6d21b1f852d1/1200/1200/False/iwant-a-world-record-icarly-1.jpg',
      video: 'https://www.youtube.com/watch?v=ns_AX0UT_pQ',
      lista: listaCategoria[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Chapolin colorado',
      imagem: 'https://cinema10.com.br/upload/filmes/filmes_11871_chapolin.jpg',
      video: 'https://www.youtube.com/watch?v=YVrXhmO0c1w',
      lista: listaCategoria[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Escolinha Prof: Raimundo',
      imagem: 'https://http2.mlstatic.com/D_NQ_NP_641772-MLB28237717192_092018-O.webp.png',
      video: 'https://www.youtube.com/watch?v=YVrXhmO0c1w',
      lista: listaCategoria[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Chavez',
      imagem: 'https://m.media-amazon.com/images/I/814wYjczd8L._AC_UF1000,1000_QL80_.jpg',
      video: 'https://www.youtube.com/watch?v=OgHslj4k8Uw',
      lista: listaCategoria[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Arnold',
      imagem: 'https://media.fstatic.com/OFR-37CgsB8ABqkhGyKGUxMduKc=/322x478/smart/filters:format(webp)/media/movies/covers/2010/11/7ba0fb0acc9a1391585a9a1ebdc46e17.jpg',
      video: 'https://www.youtube.com/watch?v=Ol9odwDsGLQ',
      lista: listaCategoria[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Are We There  Yet ?',
      imagem: 'https://i.pinimg.com/originals/91/9b/9f/919b9f33dad0492ce1f64b46e5f1296e.jpg',
      video: 'https://www.youtube.com/watch?v=-9z48iyZaLk',
      lista: listaCategoria[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Date Movie',
      imagem: 'https://i.pinimg.com/originals/93/5c/7e/935c7e86b24d3f39fc7c9269872ab518.jpg',
      video: 'https://www.youtube.com/watch?v=-9z48iyZaLk',
      lista: listaCategoria[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Super-Heroi o Filme',
      imagem: 'https://images-americanas.b2w.io/produtos/6699500/imagens/dvd-super-heroi-o-filme/6699500_1_large.jpg',
      video: 'https://www.youtube.com/watch?v=jBkR-1RRSUs',
      lista: listaCategoria[1].nome
    },
    {
      id: uuidv4(),
      nome: 'The Original Kings of Comedy',
      imagem: 'https://br.web.img3.acsta.net/c_310_420/pictures/18/11/05/23/51/5277188.jpg',
      video: 'https://www.youtube.com/watch?v=bT_UP2iFtr0',
      lista: listaCategoria[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Only America',
      imagem: 'https://www.maverickentertainment.cc/images/movies/only-in-america.jpg',
      video: 'https://www.youtube.com/watch?v=d7raKBrwBvc',
      lista: listaCategoria[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Only America',
      imagem: 'https://m.media-amazon.com/images/I/618FiO7H+sS._AC_UF894,1000_QL80_.jpg',
      video: 'https://www.youtube.com/watch?v=v_TzLQ1QH8U',
      lista: listaCategoria[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Vovózona 2',
      imagem: 'https://cinemacomrapadura.com.br/imagens/2014/12/20141220-vovozona2.jpg',
      video: 'https://www.youtube.com/watch?v=Ol9odwDsGLQ',
      lista: listaCategoria[1].nome
    }
  ]

  const [videoNovo, setNovo] = useState(inicial)


  const aoNovoVideoAdicionado = (novoVideo) => {
    setNovo([...videoNovo, { ...novoVideo, id: uuidv4() }])
  }

  function deletarVideo(id) {
    setNovo(videoNovo.filter(novoVideo => novoVideo.id !== id));
  }


  function cadastrarLista(novaLista) {
    setListaCategoria([...listaCategoria, { ...novaLista, id: uuidv4() }])
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PaginaPadrao />} >
          <Route path="/"
            element={<Banner />} />
          <Route path="/cadastra"
            element={<FormularioCadastraVideo
              cadastrarLista={cadastrarLista}
              aoNovoVideoCadastrado={novoVideo => aoNovoVideoAdicionado(novoVideo)}
              listaCategoria={listaCategoria.map(lista => lista.nome)} />}
          />
          <Route path='*' element={<PaginaNaoEncontrada />} />
        </Route>
      </Routes>
      {listaCategoria.map((lista, indice) =>
        <CarouselNovoCadastro
          key={indice}
          lista={lista}
          videoNovo={videoNovo.filter(novoVideo => novoVideo.lista === lista.nome)}
          aoDeletar={deletarVideo}
        />
      )}
      <Footer />
    </BrowserRouter>

  );
}

export default AppRoutes;
