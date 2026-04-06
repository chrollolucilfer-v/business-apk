import { View, Text,Image } from 'react-native'
import React from 'react'
import {Colors} from './../../constants/theme';


export default function PopularBusinessCard({business}) {
  return (
    <View
    style={{
        marginLeft:20,
        padding:10,
        backgroundColor:'white',
        borderRadius:15,
    }}
    >
     
<Image source={{uri:business.image}} 
style={{width:200, height:130, borderRadius:10}} />

<View
style ={{
    marginTop:10, 
    gap:5,
    }}>
    <Text
    style={{
        fontFamily:'outfit-bold',
        fontSize:16,
    }}
    >
        {business.name}
    </Text>
<Text
    style={{
        fontFamily:'outfit',
        fontSize:13,
        color:Colors.GRAY,
    }}
    >
        {business.address}
    </Text>


<View
style={{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
}}
>
<View
style={{
    display:'flex',
    flexDirection:'row',
    gap:5,
}}>
    <Image source={require('../../assets/images/star.png')}
    style={{
        width:15,
        height:15,
    }}
    />

    <Text
    style={{
        fontFamily:'outfit',
    }}>4.5</Text>
</View>
<Text
style={{
    fontFamily:'outfit',
    color:'#fff',
    backgroundColor:Colors.PRIMARY,
    padding:3,
    fontSize:12,
    borderRadius:10,
}}

>{business.category}</Text>
</View>

</View>








    </View>
  )
}