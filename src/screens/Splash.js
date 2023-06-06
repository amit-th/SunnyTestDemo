import { View, Text ,Image} from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
    useEffect(() => { setTimeout(() => { navigation.replace('Login') }, 3000) }, [])
    return (
        <View style={{flex:1,backgroundColor:'red',justifyContent:'center' }}>
        <View  style={{ alignSelf:'center'}} >
        <Image style={{
            width: 150,
            borderRadius:150/2,
            height: 150,
          }}
            source={{ uri: 'https://d3mxt5v3yxgcsr.cloudfront.net/courses/4754/course_4754_image.jpg', }} />
             <Text style={{color:"white", marginTop:50 ,fontWeight:'bold'}}>Durar HR </Text>
             <Text style={{color:"white", marginTop:20 }}>The complete HR solution </Text>
             </View>
        </View>
    )
}
export default Splash