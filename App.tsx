
import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_200ExtraLight, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading'

import { Routes } from './src/routes';
export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_200ExtraLight, 
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if(! fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      {/* <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />   */}
      <Routes/>
    </ >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
