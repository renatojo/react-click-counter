import { useState } from "react"

const Counter = () => {
    const [estado1, setEstado1] = useState(0);
    const [estado2, setEstado2] = useState(0);
    return(
    <>
        <div>
            <main>
            
            <h1>Contador de Cliques</h1>
            <button onClick={() => setEstado1(estado1 + 1)}>{estado1}</button>
            <button onClick={() => setEstado1(estado1 - 1)}>Adicione -1 ao time A</button>

            <button onClick={() => setEstado2(estado2 + 1)}>{estado2}</button>
            <button onClick={() => setEstado2(estado2 - 1)}>Adicione +1 ao time B</button>
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