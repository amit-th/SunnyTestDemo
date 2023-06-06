import { View, Text, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-vector-icons/AntDesign'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

const Login = ({ navigation }) => {
  const [UserName, SetUserName] = useState();
  const [show, setShow] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
          <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 3, marginTop: 7 }}>
            <Image source={{ uri: 'https://cdn0.iconfinder.com/data/icons/web-seo-and-advertising-media-1/512/218_Arrow_Arrows_Back-512.png' }} style={{ height: 23, width: 23 }} />
            <Text style={{ color: "black", fontSize: 18 }}> Back
            </Text>
          </View></TouchableOpacity>
        <View style={{ margin: 18 }}>
          <View>
            <Image style={{
              width: 150,
              height: 150,
              borderRadius: 75
            }}
              source={{ uri: 'https://d3mxt5v3yxgcsr.cloudfront.net/courses/4754/course_4754_image.jpg', }} />
          </View>
          <Text style={{ fontSize: 20, marginTop: 50, color: "black" }}>Proceed with your</Text>
          <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: "black"
          }}>Login</Text>

          <Text style={{ marginTop: 40, color: "black", fontSize: 16 }}>Username</Text>
          <View style={{ borderBottomWidth: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
            <TextInput placeholder='DURAR0045'
              value={UserName}
              onChangeText={(UserName) => SetUserName(UserName)} />
            <Image style={{
              width: 15,
              height: 15,
            }}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/64/64096.png' }} />
          </View>
          <Text style={{ marginTop: 20, fontSize: 16, color: "black" }}>Password</Text>
          <View style={{ borderBottomWidth: 1, alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
            <TextInput placeholder='Password'
              secureTextEntry={show}
            />
            <TouchableOpacity onPress={() => setShow(!show)}>
              <Image source={{ uri: "https://png.pngtree.com/png-clipart/20190617/original/pngtree-key-vector-icon-png-image_3876252.jpg" }} style={{ height: 20, width: 20, }} /></TouchableOpacity>

          </View>
          <View style={{ marginTop: 30, justifyContent: 'center', padding: 20 }}>
            <Button title='Login'
              onPress={() => navigation.navigate('Home', { paramKey: UserName })}
              color={'red'} />
            <Text style={{ marginTop: 20, alignSelf: 'center' }}>Forget password ? </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login;