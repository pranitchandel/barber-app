import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  Icon,
} from "react-native";
import LocationIcon from "../../Components/Icons/LocationIcon";
import { Button } from "react-native-elements";
import SortIcon from "../../Components/Icons/SortIcon";
import FilterIcon from "../../Components/Icons/FilterIcon";
import Favourites from "../../Components/Favourites";
import SalonList from "../../Components/SalonList";
import Sort from "../../Components/Sort";
import Filter from "../../Components/Filter";

function Landing({ navigation, route }) {
  const [sortVisible, setSortVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <View style={styles.locationWrapper}>
          <LocationIcon width={25} height={25} color={"grey"} />
          <View style={styles.locationTextWrapper}>
            <Text style={{ color: "white" }}>Kharadi</Text>
            <Text style={{ color: "grey" }}>Pune, Maharashtra</Text>
          </View>
        </View>
        <View style={styles.accountWrapper}>
          <Text style={styles.account}>P</Text>
        </View>
      </View>
      <View style={styles.searchWrapper}>
        <View style={styles.searchInput}>
          <Button
            title="Search"
            type="outline"
            buttonStyle={styles.containerStyle}
            titleStyle={styles.titleStyle}
            style={styles.searchButton}
            onPress={() => {
              navigation.navigate("Search");
            }}
          />
        </View>
        <View style={styles.sortWrapper}>
          <TouchableOpacity onPress={() => setSortVisible(!sortVisible)}>
            <View style={styles.sort}>
              <SortIcon width={30} height={30} color={"white"} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.sortWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
            <View style={styles.sort}>
              <FilterIcon width={30} height={30} color={"white"} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Sort visible={sortVisible} setVisible={setSortVisible} />

      <Favourites />
      <SalonList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 5,
    backgroundColor: "black",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  locationWrapper: {
    gap: 10,
    flexDirection: "row",
  },

  locationTextWrapper: {
    // display: "flex",
    // flexDirection: "row",
  },

  accountWrapper: {
    width: 35,
    height: 35,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  account: {
    fontSize: 20,
    // borderRadius: "50%",
  },

  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    gap: 10,
    backgroundColor: "white",
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "60%",
    height: 40,
    justifyContent: "flex-start",
    borderRadius: 8,
  },

  searchButton: {
    // height: "100%",
    // backgroundColor: "pink",
  },

  sortWrapper: {
    width: "15%",
    flex: 1,
    height: 40,
  },

  sort: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: "black",
    borderRadius: 8,
  },

  containerStyle: {
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    height: "100%",
    borderWidth: 0,
  },

  titleStyle: {
    fontSize: 18,
    fontWeight: 100,
    color: "rgb(153 147 147)",
  },
});

export default Landing;
