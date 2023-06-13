import React from 'react';
import { useState } from 'react';
import CampoText from '../CampoText';
import Botao from '../Botao';
import ListaSuspensa from '../ListaSuspensa';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const SelectForm = styled.section`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;

`


const Form = styled.form`
    margin-top: 27px;
    flex: 1;

`

const TituloDoForm = styled.h1`
    color: var(--azul-primario);
    margin-left: 41px;
    margin-bottom: 16px;
    font-size: 30px;
`

const DivBotao = styled.div`
    margin-left: 41px;
    display: flex;
    gap: 20px;
    
`



const FormularioVideo = ({ aoNovoVideoCadastrado, listaCategoria, cadastrarLista }) => {

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [video, setVideo] = useState('')
    const [lista, setLista] = useState('')
    
    const [categoria, setCategoria] = useState('')

  

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoNovoVideoCadastrado({
            nome,
            imagem,
            video,
            lista,

        })
        setNome('')
        setImagem('')
        setVideo('')
    }

    return (

        <SelectForm>
            <Form onSubmit={aoSalvar}>

                <TituloDoForm>Novo Video</TituloDoForm>
                <CampoText
                obrigatorio={true} 
                label="Nome" 
                placeholder="Nome do video"
                valor={nome}
                aoAlterado={valor => setNome(valor)} />

                <CampoText 
                obrigatorio={true} 
                label="Link da imagem" 
                placeholder="Link da Imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)} />

                <CampoText 
                obrigatorio={true} 
                label="Link do Video" 
                placeholder="Link do video"
                valor={video}
                aoAlterado={valor => setVideo(valor)} />

                <ListaSuspensa 
                obrigatorio={true}
                label="Categoria" 
                lista={listaCategoria}
                valor={lista}
                aoAlterado={valor => setLista(valor)}
                 />

                <DivBotao>
                <Botao>Salvar</Botao>
                <Link to={'/'}>
                <Botao>Volta Pagina Inicial</Botao>
                </Link>
                </DivBotao>
            </Form>
            <Form 
                onSubmit={(evento) => {
                    evento.preventDefault()
                    cadastrarLista({nome: categoria})
                    setCategoria('')
                }}>
                <TituloDoForm>Nova Categoria</TituloDoForm>

                <CampoText
                obrigatorio={true} 
                label="nome categoria" 
                placeholder="Nome do video"
                valor={categoria}
                aoAlterado={valor => setCategoria(valor)} />
                <DivBotao>
                <Botao>Salvar categoria</Botao>
                </DivBotao>
            </Form>
            </SelectForm>
    
    )}

export default FormularioVideo;

