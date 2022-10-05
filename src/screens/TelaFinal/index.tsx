import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";
import TSE from "../../../assets/tse-logo.png";

export function Creditos() {
    const {navigate} = useNavigation();
  return (
    <View 
        style={styles.container}
    >
        <View 
            style={styles.mainInfos}
        >
            <Image 
                source={ TSE }
                style={styles.tsePic}
            />
            <Text 
                style={styles.textoInfo}
            >
                Todos os dados obtidos para transmissão de informações do VoteApp foram tiradadas do site oficial TSE, cujo oferece publicamente todos os dados oficiais e confiáveis.
            </Text>
        </View>

        <View>
            <Text 
                style={styles.infoProtocolo}
            >
                Dados oficiais concedidos por órgãos públicos dos seguintes estados (por ordem alfabética):
            </Text>
            
            <Text style={styles.listaEstados}>
                xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - xxxxxx - 
            </Text>
        </View>
    </View>
    );
}
