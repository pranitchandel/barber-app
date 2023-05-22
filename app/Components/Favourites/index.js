import { FlatList } from "react-native";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";

const Favourites = () => {
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
  ];
  return (
    <View style={styles.favouritesbar}>
      <Text style={styles.heading}>Favourites</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          horizontal
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
  favouritesbar: {
    backgroundColor: "#d9d9d9",
    flex: 2,
    width: "100%",
    padding: 5,
  },

  heading: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    width: "100%",
  },

  list: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    backgroundColor: "white",
    margin: 5,
    borderRadius: 8,
  },
});

export default Favourites;
