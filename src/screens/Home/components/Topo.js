import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import logo from '../../../assets/logo.png'
import { carregaTopo } from "../../../services/carregaDados";

export default function Topo() {
    const [topo, setTopo] = useState({});


    useEffect(() => {
        let dados = carregaTopo();
        setTopo(dados);
    }, [])

    return <View style={estilos.topo}>
        <Image source={logo} style={estilos.image} />
        <Text style={estilos.boasVindas}>{topo.boasVindas}</Text>
        <Text style={estilos.legenda}>{topo.legenda}</Text>

    </View>
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 16,
    },
    image: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#464646",
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3"
    }
})

