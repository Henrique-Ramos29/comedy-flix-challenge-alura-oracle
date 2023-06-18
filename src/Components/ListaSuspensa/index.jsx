import styled from 'styled-components'


const DivLista = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-bottom: 1rem;

    @media screen and (max-width: 760px) {
         margin-right: 19px;
         margin-left: -10px;
    }

    @media screen and (max-width: 460px) {
         margin-right: 19px;
         margin-left: -10px;
    } 
`;

const LabelLista = styled.label`
    display: block;
    margin-left: 40px;
    margin-bottom: 12px;
    font-weight: bold;
    color: var(--azul-primario);
`; 

const SelectLista = styled.select`
    width: 90%;
    padding: 12px 20px;
    display: inline-block;
    border: 4px solid var(--azul-primario);
    border-radius: 4px;
    box-sizing: border-box;
    margin: 0px auto 1px 34px;
    margin-bottom: 30px;
    font-size: 20px ;
    font-weight: bold;
    
`;


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