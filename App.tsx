import { AppRegistry, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "react-native";
import { expo } from "./app.json";
import { useFonts } from "expo-font";
import {
  Inter_200ExtraLight,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { Provider as PaperProvider } from "react-native-paper";

import { Routes } from "./src/routes";
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_200ExtraLight,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PaperProvider>
      {/* <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />   */}
      <Routes />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
