import React, { useState } from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

import Estrela from "./components/Estrela";

export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false }) {
    const [quantEstrelas, setQuantEstrelas] = useState(quantidadeAntiga);

    const RenderEstrelas = () => {
        const estrelas = [];

        for (let i = 0; i < 5; i++) {
            estrelas.push(
                <Estrela onPress={() => setQuantEstrelas(i + 1)} desabilitado={!editavel} preenchida={i < quantEstrelas} key={`estrela_${i}`} grande={grande}/>
            );
        }

        return estrelas;
    }

    return <View style={estilos.estrelas}>
        <RenderEstrelas />
    </View>
}

const estilos = StyleSheet.create({
    estrelas: {
        flexDirection: "row"
    }
})