import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {Colors} from '../constants/theme';
import { useWarmUpBrowser} from "./../hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";
WebBrowser.maybeCompleteAuthSession();
import { useOAuth } from '@clerk/clerk-expo';



export default function LoginScreen() {
  useWarmUpBrowser();
  
  


 const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, [startOAuthFlow]);



  return (
    <View>
    <View style={{
      display: 'flex',
      alignItems: 'center',
      marginTop:100
    }}>

    <Image source={require('./../assets/images/freal.png')}
    style={{
      width:220,
      height:450,
      borderRadius: 20,
      borderWidth: 2,
      borderColor:'#000'
    }}
   />

  </View>

<View style={{backgroundColor:'#fff', padding:20, marginTop:-20,


}}
>
  <Text style={{fontSize:30,
  fontFamily:'outfit-bold',
  textAlign:'center',


  }}
  >
    Your Ultimate
<Text
style={{
  color:Colors.PRIMARY,

}}
>    
   Community Business Directory
    </Text>

      App
  </Text>
<Text
style={{
  fontSize:15,
  textAlign:'center',
  fontFamily: 'outfit',
  marginVertical:15,
  color:Colors.GRAY
}}
>
  Find Your Favorite business near you and post your own business to your community
</Text>


<TouchableOpacity
style={
styles.btn
}
onPress={onPress}
>
  <Text
  style={{
    textAlign:'center',
    color:'#fff',
    fontFamily:'outfit',
     }}
  >
    Let's Get Started
  </Text>
</TouchableOpacity>
</View>



    </View>
  )
}

const styles = StyleSheet.create({
btn:{
  backgroundColor:Colors.PRIMARY,
  padding: 16,
  borderRadius:99,
  margin:20,
}

})