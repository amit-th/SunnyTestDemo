import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Splash';
import Login from './Login';
import Home from './Home';
import DataListing from './DataListing';
// import * as Constants from "./ApiConstants";
import {ApiConstants } from "./ApiConstants"
const Stack = createNativeStackNavigator();
function Routes() {
    return (
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name= "DataListing" component={DataListing}/>
            </Stack.Navigator>
    );
}

export default Routes;