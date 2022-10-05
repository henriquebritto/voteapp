import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { Button, Searchbar, Appbar } from "react-native-paper";
import { Logo } from "../../components/Logo";
import { Candidatos } from "../../components/Candidatos";
import { DialogWithRadioBtns } from "../../components/Estados";
import { styles } from "./styles";
import { SaibaMais } from "../../components/Infos";

import { useNavigation } from "@react-navigation/core";

const estad = [
  {
    nome: "Ceara",
    sigla: "CE",
  },
  {
    nome: "Rio de Janeiro",
    sigla: "RJ",
  },
];

export function Home() {
  const [exibeDialog, setExibeDialog] = useState(false);
  const [estado, setEstado] = useState("");

  useEffect(() => {
    if (estado !== ""){
      Alert.alert("Mudou estado", "Agora é " + estado);
    }
  }, [estado]);

  const {navigate} = useNavigation();
  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.fundo}>
        <Button
          icon="arrow-down"
          mode="elevated"
          onPress={() => {
            //@ts-ignore
            navigate("EstadoSelecionado")
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
          estados={estad}
          close={(uf?: string) => {
            if (uf) setEstado(uf);
            setExibeDialog(false);
          }}
        />
        <Candidatos />
      </View>
    </View>
  );
}
