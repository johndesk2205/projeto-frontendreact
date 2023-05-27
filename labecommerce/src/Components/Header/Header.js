import React from 'react'
import { HeaderStyled } from './HeaderStyle'
import logo from "../../assets/Logo.jpg"

export default function Header() {
    return (
        <HeaderStyled>
            <img src={logo} width={60} height={60} />
            <div>
                <h1>ESTAMPE SPACE</h1>
                <p>A sua loja de Estampas Espaciais para camisas</p>
            </div>
        </HeaderStyled>
    )
}
