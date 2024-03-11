import React, {useState} from "react"
import Dexter from "./imgsProgramacao/Dexter.png"
import Vaca from "./imgsProgramacao/Vaca.png"
import Du from "./imgsProgramacao/Du.png"
import Coragem from "./imgsProgramacao/Coragem.png"

function Programacao(){

const [desenhos, setdesenhos] = useState([
    {nome: 'O laboratório de Dexter', hora: '7:30h', imagem: Dexter},
    {nome: "A Vaca e o Frago", hora: "6:00h", imagem: Vaca}, 
    {nome: "Du, Dudu e Edu", hora: "9:00h", imagem: Du},
    {nome: "Coragem, o cão covarde", hora: "10:00h", imagem: Coragem}
])

    return(
       <section>
        {desenhos.map((item)=>(
            <div>
                <h2>{item.nome}</h2>
                <h2>{item.hora}</h2> 
                <img src= {item.img} alt= ''/>
            </div>
        ))}
       </section>
    )
}

export default Programacao