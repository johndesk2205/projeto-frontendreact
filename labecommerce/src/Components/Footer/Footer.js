import React from 'react'
import { FooterStyled } from './FooterStyle'
import image from "../../assets/ImageFooter.png"

export default function Footer() {
    return (
        <FooterStyled>
            <img src={image} />
            <h6>Desenvolvido por João Marcos</h6>
        </FooterStyled>
    )
}
