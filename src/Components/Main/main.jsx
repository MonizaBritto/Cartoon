import React, {useState} from "react"

import Scooby from "./img.main/scobby.png"
import Ben10 from "./img.main/ben-10.png"
import Looney from "./img.main/looney.png"

import Gumball from "./img.main/gumball.png"
import Power from "./img.main/power-girls.png"
import Tom from "./img.main/tom-jerry.png"

import * as S from "./MainStyle"

import Programacao from "../Programação/programação.jsx"

function Main(){ 

//Sintaxe useState
//const [estado, setestado] = useState()

const [galeria, setgaleria] = useState([
    Gumball, Power, Tom
])

    return(
        <S.MainStyle>
            <S.Section>
                <img src={Scooby} alt="Scooby" />
                <img src={Ben10} alt="Ben10" />
                <img src={Looney} alt="Looney" />
            </S.Section>

            <S.Section2>
                {galeria.map((item)=>(
                  <img src={item} alt= ''/> 
                ))}
            </S.Section2>
            <Programacao/>
        </S.MainStyle>
    )
}

export default Main 