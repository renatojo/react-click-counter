import { useState } from "react"

const Counter = () => {
    const [estado1, setEstado1] = useState(0);
    const [estado2, setEstado2] = useState(0);
    return(
    <>
        <div>
            <main>
            
            <h1>Contador de Cliques</h1>
            <h1>{estado1}</h1>
            <h1>{estado2}</h1>
            <button onClick={() => setEstado1(estado1 + 1)}>Aperte1</button>
            <button onClick={() => setEstado2(estado2 + 1)}>Aperte2</button>
            </main>
        </div>
    </>
    )
} 


export default Counter