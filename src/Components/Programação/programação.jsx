import React, {useState} from "react"

import Dexter from "./imgsProgramacao/Dexter.png"
import Vaca from "./imgsProgramacao/Vaca.png"
import Du from "./imgsProgramacao/Du.png"
import Coragem from "./imgsProgramacao/Coragem.png"

import Jorel from "./imgsProgramacao/Jorel.png"
import Turma from "./imgsProgramacao/Turma.png"
import Steven from "./imgsProgramacao/Steven.png"
import Billy from "./imgsProgramacao/Billy.png"

import * as S from "./programaçãoStyle"

function Programacao(){

    const [desenhos, setDesenhos] = useState([
        { nome: "O LABORATÓRIO DE DEXTER", hora: "7:00h ", imagem: Dexter, desenhosManha: true },
        { nome: "A VACA E O FRANGO", hora: "8:00h ", imagem: Vaca, desenhosManha: true },
        { nome: "DU, DUDU E EDU", hora: "9:00h ", imagem: Du, desenhosManha: true },
        { nome: "CORAGEM, O CÃO COVARDE", hora: "10:00h ", imagem: Coragem, desenhosManha: true },
        { nome: "IRMÃO DO JOREL", hora: "11:00h ", imagem: Jorel, desenhosManha: true },
        { nome: "TURMA DA MÔNICA JOVEM", hora: "12:00h ", imagem: Turma, desenhosManha: false },
        { nome: "STEVEN UNIVERSO", hora: "13:00h ", imagem: Steven, desenhosManha: false },
        { nome: "BILLY E MANDY", hora: "14:00h ", imagem: Billy, desenhosManha: false }
    ])

const desenhosAntesMeioDia = desenhos.filter((item) => item.desenhosManha === true)

    return(
        <S.ConteudoProgramacao>

        <S.SectionProgramacao>
        {desenhos.map((item) => (
            <S.Div>
                <h3>{item.hora} </h3>
                <h3> {item.nome} </h3>
                <img src={item.imagem} alt="" />
            </S.Div>
        ))}
        </S.SectionProgramacao>

       <S.SectionManha>
                {desenhosAntesMeioDia.map((item)=>(
                    <S.CardManha>
                    <p> {item.nome} </p>
                    <img src={item.imagem} alt="" />
                    </S.CardManha>

                ))}
            </S.SectionManha>

        </S.ConteudoProgramacao>
    )
}

export default Programacao