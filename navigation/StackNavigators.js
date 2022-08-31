import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from '../screens/LoginScreen';
import DetalheScreen from '../screens/DetalheTriagemScreen'
import CadastroScreen from '../screens/CadastroScreen';
import BottomTabsNavigator from './BottomTabsNavigator';

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#ee125a',
                },
            }}
        >
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Cadastro' component={CadastroScreen} />
            <Stack.Screen name='Detalhes' component={DetalheScreen}/>
            <Stack.Screen name='Home' component={BottomTabsNavigator} />
        </Stack.Navigator>
    );
}