import { View, Text, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


export default function Home() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, padding: 20 }}>
      
      {/* Header */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Hello Bhaskar 👋
        </Text>

        <View style={{
          width: 40,
          height: 40,
          backgroundColor: 'gray',
          borderRadius: 20
        }} />
      </View>

      {/* Search Bar */}
      <View style={{
        marginTop: 20,
        backgroundColor: '#f1f1f1',
        padding: 10,
        borderRadius: 10
      }}>
        <TextInput placeholder="Search business..." />
      </View>

      {/* Categories */}
<ScrollView 
  horizontal 
  showsHorizontalScrollIndicator={false}
  style={{ marginTop: 20 }}
>
  {['Restaurant', 'Gym', 'Hospital', 'Salon', 'Cafe'].map((item, index) => (
   <TouchableOpacity
  key={index}
  onPress={() => router.push(`/business-list/${item}`)}
  style={{
    padding: 12,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginRight: 10
  }}
>
  <Text>{item}</Text>
</TouchableOpacity>
  ))}
</ScrollView>

    </View>
  );
}