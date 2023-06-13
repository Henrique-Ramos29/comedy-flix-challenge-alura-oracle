import styled from 'styled-components'


const DivLista = styled.div`
    display: flex;
    flex-direction: column;
`

const LabelLista = styled.label`
    margin-left: 41px;
    margin-bottom: 12px;
    font-weight: bold;
    color: var(--azul-primario);
`
const SelectLista = styled.select`
    width: 360px;
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
    margin-left: 41px;
    
`


const ListaSuspensa = (props) => {
    return(
        <DivLista>
            
           <LabelLista>{props.label}</LabelLista>
           <SelectLista onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
              {props.lista.map(listas => {
                return <option key={listas}>{listas}</option>
            })}
            </SelectLista>

        </DivLista>
    )
}

export default ListaSuspensa;