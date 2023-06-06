import { View, Text } from 'react-native'
import React from 'react'
import Routes from './src/screens/Routes'
import { NavigationContainer } from '@react-navigation/native'
const App = () => {
  return (
    <NavigationContainer>
    <View style={{flex:1}}>
    <Routes/>
    </View>
    </NavigationContainer>


  )
}

export default App