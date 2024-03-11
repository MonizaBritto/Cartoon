import React from "react"
import * as S from "./HeaderStyle.jsx"
//importa (*) tudo como S de "./caminho"
import Logo from "./img.header/logo.png"
import Analogico from "./img.header/analogico.png"
import Relogio from "./img.header/relogio.png"

function Header(){
    return(
        <S.StyleHeader>
            <S.Logo src={Logo} alt="Logo do Cartoon Network" />
            <S.Section>
                <S.Categoria>
                    <S.Icone src={Analogico} alt="Desenho de um analogico de ontrole de Video-Game" />
                    <h2>JOGOS</h2>
                </S.Categoria>
                
                <S.Categoria>
                    <S.Icone src={Relogio} alt="Desenho de relógio de parede" />
                    <h2>PROGRAMAÇÃO</h2>
                </S.Categoria>
            </S.Section>
        </S.StyleHeader>
    )
}

export default Header