import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

const SalonList = () => {
  const salonData = [
    {
      id: 1,
      name: "A1 Salon",
      address: "Kharadi",
      city: "Pune",
      state: "Maharashtra",
      distance: "2.5 Km",
      timeReamining: "25 mints",
    },
    {
      id: 2,
      name: "B1 Salon",
      address: "Kharadi",
      city: "Pune",
      state: "Maharashtra",
      distance: "3.5 Km",
      timeReamining: "35 mints",
    },
    {
      id: 3,
      name: "A1 Salon",
      address: "Kharadi",
      city: "Pune",
      state: "Maharashtra",
      distance: "2.5 Km",
      timeReamining: "25 mints",
    },
    {
      id: 4,
      name: "B1 Salon",
      address: "Kharadi",
      city: "Pune",
      state: "Maharashtra",
      distance: "3.5 Km",
      timeReamining: "35 mints",
    },
    {
      id: 5,
      name: "A1 Salon",
      address: "Kharadi",
      city: "Pune",
      state: "Maharashtra",
      distance: "2.5 Km",
      timeReamining: "25 mints",
    },
    {
      id: 6,
      name: "B1 Salon",
      address: "Kharadi",
      city: "Pune",
      state: "Maharashtra",
      distance: "3.5 Km",
      timeReamining: "35 mints",
    },
    {
      id: 7,
      name: "A1 Salon",
      address: "Kharadi",
      city: "Pune",
      state: "Maharashtra",
      distance: "2.5 Km",
      timeReamining: "25 mints",
    },
    {
      id: 8,
      name: "B1 Salon",
      address: "Kharadi",
      city: "Pune",
      state: "Maharashtra",
      distance: "3.5 Km",
      timeReamining: "35 mints",
    },
    {
      id: 9,
      name: "A1 Salon",
      address: "Kharadi",
      city: "Pune",
      state: "Maharashtra",
      distance: "2.5 Km",
      timeReamining: "25 mints",
    },
    {
      id: 10,
      name: "B1 Salon",
      address: "Kharadi",
      city: "Pune",
      state: "Maharashtra",
      distance: "3.5 Km",
      timeReamining: "35 mints",
    },
    {
      id: 11,
      name: "A1 Salon",
      address: "Kharadi",
      city: "Pune",
      state: "Maharashtra",
      distance: "2.5 Km",
      timeReamining: "25 mints",
    },
    {
      id: 12,
      name: "B1 Salon",
      address: "Kharadi",
      city: "Pune",
      state: "Maharashtra",
      distance: "3.5 Km",
      timeReamining: "35 mints",
    },
  ];
  return (
    <View style={styles.listView}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={salonData}
          renderItem={({ item }) => (
            <View style={styles.list} title={item.name}>
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  listView: {
    backgroundColor: "#d9d9d9",
    flex: 7,
    width: "100%",
    padding: 0,
  },

  container: {
    flex: 1,
    width: "100%",
  },
  list: {
    backgroundColor: "white",
    height: 120,
    margin: 5,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SalonList;
