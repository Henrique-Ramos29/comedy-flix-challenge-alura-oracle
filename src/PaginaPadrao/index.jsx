import styled from 'styled-components'
import { Outlet } from "react-router-dom";
import Cabecalho from "../Components/Cabecalho";

const MainPadrao = styled.main`

`

export default function PaginaPadrao() {
    return (
        <MainPadrao>
            <Cabecalho />
            <Outlet />
        </MainPadrao>
    )
}