import { View, Text, Image } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

export default function BusinessList() {
  const { category } = useLocalSearchParams();
  const businessList = [
  {
    id: 1,
    name: "Power Gym",
    rating: 4.5,
    address: "Varanasi",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1"
  },
  {
    id: 2,
    name: "Fitness Hub",
    rating: 4.2,
    address: "Delhi",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f"
  },
  {
    id: 3,
    name: "Muscle Factory",
    rating: 4.8,
    address: "Mumbai",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
  },
];
  return (
    <>
      <Stack.Screen options={{ title: category }} />

     <View style={{ flex: 1, padding: 20 }}>
  {businessList.map((item) => (
    <View
      key={item.id}
      style={{
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 3
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: '100%',
          height: 150
        }}
      />

      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {item.name}
        </Text>

        <Text style={{ marginTop: 5 }}>
          ⭐ {item.rating}
        </Text>

        <Text style={{ color: 'gray', marginTop: 2 }}>
          📍 {item.address}
        </Text>
      </View>
    </View>
  ))}
</View>
    </>
  );
}