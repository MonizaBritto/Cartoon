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

const [galeria1, setgaleria1] = useState([
    Scooby, Ben10, Looney
])
const [galeria, setgaleria] = useState([
    Gumball, Power, Tom
])

    return(
        <main>
            <S.Section>
               {galeria1.map((item)=>(
                <S.Img src={item} alt= ''/>
            ))}
            </S.Section>

            <S.Section2>
                {galeria.map((item)=>(
                  <img src={item} alt= ''/> 
                ))}
            </S.Section2>
            <Programacao/>
        </main>
    )
}

export default Main 