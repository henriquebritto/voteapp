import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { Teste } from '../screens/Teste'; 
import { Home } from '../screens/Home';


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
        </Navigator>
    )
}