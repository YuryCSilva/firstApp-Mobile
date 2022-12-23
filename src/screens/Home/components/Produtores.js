import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import useProdutores from "../../../hooks/useProdutores";
import { carregaProdutores } from "../../../services/carregaDados";
import Produtor from "./Produtor";

const ordenaLista = (a, b) => {
    return a.distancia - b.distancia;
}

export default function Produtores({ topo: Topo }) {
    const produtores = useProdutores();

    const TopoHeader = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{produtores.titulo}</Text>
        </>
    }

    const lista = produtores?.lista.sort(ordenaLista);

    return <>
        {produtores &&
            <FlatList
                data={lista}
                renderItem={({ item }) => <Produtor {...item} />}
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