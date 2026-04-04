import { View, Text, Image, TextInput } from 'react-native';
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import { dismissBrowser } from 'expo-web-browser';
import {Colors} from './../../constants/theme';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Header() {

    const {user}=useUser();

  return (
    <View
    style={{
            padding:20,
            paddingTop:40,
            backgroundColor:Colors.PRIMARY,
        }}
    >
        <View
        style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            gap:10
        }}
        >

            <Image source={{uri:user?.imageUrl}}
            style={{
                width: 45,
                height: 45,
                borderRadius:99
            }}
            />

            <View>
                <Text
                style={{
                    color:'#fff',
                }}
                >
                    Welcome,
                </Text>
                <Text
                style ={{
                 fontSize:19,
                   color:'#fff',

                    fontFamily:'outfit-medium',
                }}
                
                >
                    {user?.fullName}
                </Text>
            </View>


        </View>

{/* Search Bar */}
<View>

<EvilIcons name="search" size={24} color="black" />
<TextInput
 placeholder='Search...'
/>


</View>


    </View>
  )
}