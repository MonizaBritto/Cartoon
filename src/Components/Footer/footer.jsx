import React from "react"
import * as S from "./FooterStyle.jsx"

import Warner from "./img.footer/Warner.png"
import Github from "./img.footer/Github.png"
import Linkedin from "./img.footer/Linkedin.png"

function Footer(){
    return(
        <footer>
            <S.Section1>
                <img src={Warner} alt="" />
                <S.Ul>
                    <li>Sobre nós</li>
                    <li>Produtos</li>
                    <li>Personagens</li>
                </S.Ul>
                <S.Div>
                    <img src={Github} alt="" />
                    <img src={Linkedin} alt="" />
                </S.Div>
            </S.Section1>

            <S.Section2>
                <p>© 2024 Cartoon Network</p>
            </S.Section2>
        </footer>
    )
}

export default Footer