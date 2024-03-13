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

const [desenhos, setdesenhos] = useState([
    {nome: 'O laboratório de Dexter', hora: '7:30h', imagem: Dexter},
    {nome: "A Vaca e o Frago", hora: "6:00h", imagem: Vaca}, 
    {nome: "Du, Dudu e Edu", hora: "9:00h", imagem: Du},
    {nome: "Coragem, o cão covarde", hora: "10:00h", imagem: Coragem}
])

const [desenhos2, setdesenhos2] = useState([
    {nome: 'Irmão Do Jorel', hora: '11:00', imagem: Jorel},
    {nome: 'Turma da Mônica Jovem', hora:'12:00', imagem: Turma},
    {nome: 'Steven Universo', hora:'13:00', imagem: Steven},
    {nome: 'Billy e Mandy', hora:'14:00', imagem: Billy}
])

    return(
        <S.MainStyle>
       <S.Section>
        {desenhos.map((item)=>(
            <S.Div>
                <h2>{item.hora}</h2>
                <h2>{item.nome}</h2> 
                <img src= {item.imagem} alt= ''/>
            </S.Div>
        ))}
       </S.Section>

       <S.Section>
            {desenhos2.map((item2)=>(
                <S.Div>
                    <h2>{item2.hora}</h2> 
                    <h2>{item2.nome}</h2>
                    <img src= {item2.imagem} alt= ''/>
                </S.Div>
            ))}
       </S.Section>
        </S.MainStyle>
    )
}

export default Programacao