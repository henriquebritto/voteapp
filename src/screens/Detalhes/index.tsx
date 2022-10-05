import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { Button, Searchbar, Appbar } from "react-native-paper";
import { Logo } from "../../components/Logo";
import { Candidatos } from "../../components/Candidatos";
import { DialogWithRadioBtns } from "../../components/Estados";
import { styles } from "./styles";
import { SaibaMais } from "../../components/Infos";

export function EstadoSelecionado(){
    const [exibeDialog, setExibeDialog] = useState(false);
    const [estado, setEstado] = useState("");

    return(
        <View style={styles.container}>
            <View style={styles.fundo}>
                <Button
                icon="arrow-down"
                mode="elevated"
                onPress={() => {
                    //@ts-ignore
                    navigate("Creditos")
                }}
                buttonColor="#AAC2A1"
                textColor="#353535"
                style={styles.botaoEstatisticas}
                >
                Estatísticas Detalhadas
                </Button>
                <SaibaMais/>
                <DialogWithRadioBtns
                visible={exibeDialog}
                estados={[]}
                close={(uf?: string) => {
                    if (uf) setEstado(uf);
                    setExibeDialog(false);
                }}
                />
                <Candidatos />
            </View>
        </View>
    );
};