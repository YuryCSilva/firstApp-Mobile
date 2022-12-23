import { useState, useEffect } from "react";

import { carregaProdutores } from "../services/carregaDados";

export default function useProdutores(){
    const [produtores, setProdutores] = useState(null);

    useEffect(() => {
        //utilizando timer para simular o tempo de resposta de uma API
        const timer = setTimeout(() => {
            async function carregaDadosProdutores() {
                let dados = await carregaProdutores();
                setProdutores(dados);
            }

            carregaDadosProdutores();
        }, 2000);

        return () => clearTimeout(timer);
    },[])

    return produtores;
}