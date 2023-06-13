import { useState } from 'react'
import styled from 'styled-components'


const ContainerCampoText = styled.div`
      display: flex;
      flex-direction: column;
`

const LabelCampoText = styled.label`
      color: var(--azul-primario);
      font-weight: bold;
      margin-left: 42px;
      margin-bottom: 10px;
`

const InputCampoText = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 4px solid var(--azul-primario);
    border-radius: 4px;
    box-sizing: border-box;
    max-width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
    font-size: 20px ;
    font-weight: bold;
`


const CampoText = ({type = 'texto', label, valor, aoAlterado, placeholder, obrigatorio}) => {
    

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)

    }

    return (
        <ContainerCampoText className="campo-texto">
            <LabelCampoText className='tituloInput'>{label}</LabelCampoText>

            <InputCampoText className='input-Geral'
            type={type}
            value={valor}
            onChange={evento => 
            aoAlterado(evento.target.value)}
            placeholder={placeholder}
            required={obrigatorio}
              />

        </ContainerCampoText>
    )
}

export default CampoText;