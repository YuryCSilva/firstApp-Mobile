import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import estrela from "../../../assets/estrela.png"
import estrelaCinza from "../../../assets/estrelaCinza.png"

export default function Estrela({onPress, desabilitado, preenchida, grande}) {
    const estilos = estilosFuncao(grande);

    const getImage = () => {
        if (preenchida) return estrela;
        return estrelaCinza;
    }

    return <TouchableOpacity onPress={onPress} disabled={desabilitado}>
        <Image source={getImage()} style={estilos.estrela} />
    </TouchableOpacity>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 18 : 12,
        height: grande ? 18 : 12,
    }
})