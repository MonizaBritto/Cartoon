import React from "react"
import * as S from "./HeaderStyle.jsx"
//importa (*) tudo como S de "./caminho"
import Logo from "../../assets/logo.png"
import Analogico from "../../assets/analogico.png"
import Relogio from "../../assets/relogio.png"

function Header(){
    return(
        <S.StyleHeader>
            <S.Logo src={Logo} alt="Logo do Cartoon Network" />
            <S.Nav>
                <S.Categoria>
                    <S.Icone src={Analogico} alt="Desenho de um analogico de ontrole de Video-Game" />
                    <h2>JOGOS</h2>
                </S.Categoria>
                <S.Categoria>
                    <S.Icone src={Relogio} alt="Desenho de relógio de parede" />
                    <h2>PROGRAMAÇÃO</h2>
                </S.Categoria>
            </S.Nav>
        </S.StyleHeader>
    )
}

export default Header