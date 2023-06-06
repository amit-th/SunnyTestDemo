import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const storeData = () => {
  AsyncStorage.setItem('Name', "amit")
  console.log("done")
}
const GetData = async () => {
  let a = await AsyncStorage.getItem('Name')
  console.log(a)
}
const Home = ({ route }) => {
  useEffect(() => {
    GetData()
  }, [])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
      <View>
        <Text style={{ fontSize: 30 }}> The Value is :{route.params.paramKey}</Text>
        <Button onPress={() => storeData(GetData)} title='save' />
        <Text style={{ fontSize:30, marginTop:20, fontFamily:'OpenSans-LightItalic'}}> custom fonts </Text>
      </View>
      // hello amit this is master with test
    </SafeAreaView>
  )
}

export default Home
