import { useState } from "react"
import './CounterCss.css'

const Counter = () => {
    const [estado1, setEstado1] = useState(0);
    const [estado2, setEstado2] = useState(0);
    return(
    <>
        <div>
            <main>
            
            <h1>Contador de Cliques</h1>

            <div id="DivTitulos">
                <h1 class="titulos" id="casa">CASA</h1>
                <h1 class="titulos" id="visitante">VISITANTE</h1>
            </div>

            <div id="DivContadorPrincipal">
            <button class="BotaoDiminuirQuantidade" onClick={() => setEstado1(estado1 - 1)}>-1</button>
            <button class="ContadorPrincipal" onClick={() => setEstado1(estado1 + 1)}>{estado1}</button>
            <button class="ContadorPrincipal" onClick={() => setEstado2(estado2 + 1)}>{estado2}</button>
            <button class="BotaoDiminuirQuantidade" onClick={() => setEstado2(estado2 - 1)}>-1</button>
            </div>

            <button onClick={() => {
                 setEstado2(0);
                 setEstado1(0);
            }}>Resete o placar</button>

            
            </main>
        </div>
    </>
    )
} 


export default Counter