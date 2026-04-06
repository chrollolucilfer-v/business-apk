import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from './../../constants/theme';
import PopularBusinessCard from './PopularBusinessCard';
import { collection, query, getDocs, limit } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";






export default function PopularBusiness() {
const [businessList, setBusinessList]=useState([]);
  useEffect(() => {
    GetBusinessList();
  }, []);
const GetBusinessList = async()=>{
  setBusinessList([]);
  const q= query(collection(db,'BusinessList'),limit (5));
  const querySnapshot=await getDocs(q);


  querySnapshot.forEach((doc)=>{
    console.log(doc.data());
    setBusinessList((prev)=>[...prev, doc.data()])
  })
}

  return (
    <View>
       <View style={{paddingLeft:20, marginBottom:10,
       display:'flex', 
        flexDirection:'row', justifyContent:'space-between',
         alignItems:'center', marginTop: 20}}>
            <Text style ={{ marginTop: 20, fontSize: 18, 
            fontFamily: 'outfit-bold',}}
          >
            Popular Business List
            </Text>
            <Text style={{color:Colors.PRIMARY,
               fontFamily:'outfit-medium'}}>View All</Text>
            </View>

<FlatList
horizontal={true}
showsHorizontalScrollIndicator={false}
data={businessList}
renderItem={({ item,index }) => (
 
<PopularBusinessCard 
business={item}
key={index}

/>        


)}
/>

    </View>
  )
}