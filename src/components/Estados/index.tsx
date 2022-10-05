import * as React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import {
  Button,
  Portal,
  Dialog,
  RadioButton,
  TouchableRipple,
} from "react-native-paper";

import { TextComponent } from "./DialogTextComponent";

type Props = {
  visible: boolean;
  close: (uf?:string) => void;
  estados: Estados[];
};

interface Estados {
  nome: string;
  sigla: string;
}

export const DialogWithRadioBtns = ({ visible, close, estados }: Props) => {
  const [checkedValue, setCheckedValue] = React.useState<string>("AC");

  return (
    <Portal>
      <Dialog onDismiss={close} visible={visible}>
        <Dialog.Title>Choose an option</Dialog.Title>
        <Dialog.ScrollArea style={styles.container}>
          <ScrollView>
            <View>
              {estados.map((estado) => (
                <TouchableRipple key={estado.sigla} onPress={() => setCheckedValue(estado.sigla)}>
                  <View style={styles.row}>
                    <View pointerEvents="none">
                      <RadioButton
                        value={estado.sigla}
                        status={checkedValue === estado.sigla ? "checked" : "unchecked"}
                      />
                    </View>
                    <TextComponent isSubheading style={styles.text}>
                      {estado.nome}
                    </TextComponent>
                  </View>
                </TouchableRipple>
              ))}
            </View>
          </ScrollView>
        </Dialog.ScrollArea>
        <Dialog.Actions>
          <Button onPress={()=>{close()}}>Cancelar</Button>
          <Button onPress={()=>{close(checkedValue)}}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogWithRadioBtns;

const styles = StyleSheet.create({
  container: {
    maxHeight: 170,
    paddingHorizontal: 0,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    paddingLeft: 8,
  },
});
