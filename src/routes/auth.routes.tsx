import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { Teste } from '../screens/Teste'; 
import { Home } from '../screens/Home';
import { Creditos } from '../screens/TelaFinal';
import { EstadoSelecionado } from '../screens/Detalhes';


const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes () {
    return(
        <Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent',
                },
                headerShown: false,
            }}
        >
                <Screen
            name="Teste"
            component={Teste}
                />

                <Screen
            name="Home"
            component={Home}
                />

                <Screen
            name="Creditos"
            component={Creditos}
                />

                <Screen
            name="EstadoSelecionado"
            component={EstadoSelecionado}
                />
        </Navigator>
    )
}