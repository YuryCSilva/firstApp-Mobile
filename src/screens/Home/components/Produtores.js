import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { carregaProdutores } from "../../../services/carregaDados";
import Produtor from "./Produtor";

export default function Produtores({topo: Topo}) {
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

    const TopoHeader = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{produtores.titulo}</Text>
        </>
    }

    return <>
        {produtores &&
            <FlatList
                data={produtores.lista}
                renderItem={({item}) => <Produtor {...item} />}
                ListHeaderComponent={TopoHeader}
                keyExtractor={({ nome }) => nome}
            />
        }
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})