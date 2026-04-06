import React from 'react'
import {Colors} from './../../constants/theme';
import { View, Text, TouchableOpacity, Image } from 'react-native'

export default function CategoryItem({category, onCategoryPress}) {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(category)} >
        <View style={{padding:15, 
              backgroundColor:Colors.ICON_BG,
             borderRadius:99, marginRight:15}}>
      <Image source={{uri:category.image}}
       style={{width:40, height:40, borderRadius:10}}
       />
    </View>
    <Text style={{
        fontSize:12, fontFamily:'outfit-medium',
       textAlign:'center', marginTop:5
    }}
    >  {category.name}</Text>
    </TouchableOpacity>
  )
}