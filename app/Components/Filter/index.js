import {
  View,
  Text,
  StyleSheet,
  Animated,
  Alert,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Overlay, ListItem, Slider } from "@rneui/themed";
import { useEffect, useRef, useState } from "react";
import RadioUnchecked from "../Icons/RadioUnchecked";
import ArrowBackIcon from "../Icons/ArrowBack";
import ExpandMore from "../Icons/ExpandMore";
import CircleFill from "../Icons/CircleFill";
import AddIcon from "../Icons/AddIcon";
import RemoveIcon from "../Icons/RemoveIcon";

const Filter = ({ visible, setVisible, navigation }) => {
  const progress = useRef(new Animated.Value(0)).current;
  const [expanded, setExpanded] = useState(false);

  const [rating, setRating] = useState(1);

  const handleChange = (panel) => {
    setExpanded((prev) => (prev === panel ? false : panel));
  };

  const dummyFilterData = [
    {
      name: "Haircut",
      value: ["50-60 INR", "60-70 INR", "70-100 INR"],
    },
    {
      name: "Shaving",
      value: ["40-50 INR", "50-60 INR", "60-70 INR", "70-100 INR"],
    },
  ];
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 6000,
      useNativeDriver: false,
    }).start();

    Animated.timing(progress, {
      toValue: 100,
      duration: 6000,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <ArrowBackIcon height={20} width={20} color={"black"} />
        </TouchableOpacity>

        <Text style={styles.filterTitle}>Filter</Text>
        <TouchableOpacity onPress={() => console.log("Reset")}>
          <Text style={{ fontSize: 18 }}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryWrapper}>
        <View style={styles.filterCategoryHeading}>
          <Text style={styles.categoryText}>Services / Prices</Text>
          <ExpandMore height={30} width={30} color={"white"} />
        </View>
        {dummyFilterData.map((filter, key) => (
          <ListItem.Accordion
            // style={{ borderWidth: 1 }}
            content={
              <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "bold", fontSize: 25 }}>
                  {filter.name}
                </ListItem.Title>
              </ListItem.Content>
            }
            isExpanded={expanded === filter.name}
            onPress={() => handleChange(filter.name)}
            key={key}
          >
            <View style={{}}>
              {filter.value.map((val, key) => (
                <ListItem key={key}>
                  <ListItem.Content
                    style={{
                      alignItems: "center",
                      backgroundColor: "#d9d9d9",
                      height: 50,
                    }}
                  >
                    <ListItem.Title
                      style={{
                        fontSize: 20,
                      }}
                    >
                      {val}
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </View>
          </ListItem.Accordion>
        ))}
      </View>

      <View style={styles.categoryWrapper}>
        <View style={styles.filterCategoryHeading}>
          <Text style={styles.categoryText}>Rating</Text>
        </View>
        <View style={styles.sliderContainer}>
          <View style={styles.sliderWrapper}>
            <TouchableOpacity
              disabled={rating <= 0}
              onPress={() => setRating(rating - 0.5)}
            >
              <RemoveIcon height={30} width={30} color={"black"} />
            </TouchableOpacity>
            <View
              style={{
                width: "80%",
              }}
            >
              <Slider
                value={rating}
                onValueChange={setRating}
                maximumValue={5}
                minimumValue={0}
                step={0.5}
                allowTouchTrack
                trackStyle={{
                  height: 20,
                  backgroundColor: "transparent",
                  borderRadius: 8,
                }}
                thumbStyle={{
                  height: 20,
                  width: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                thumbProps={{
                  children: (
                    <CircleFill height={30} width={30} color={"black"} />
                  ),
                }}
              />
            </View>
            <TouchableOpacity
              disabled={rating >= 5}
              onPress={() => setRating(rating + 0.5)}
            >
              <AddIcon height={30} width={30} color={"black"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
    padding: 10,
    width: "100%",
    height: "100%",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  categoryWrapper: {
    borderWidth: 1,
    marginBottom: 10,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },

  filterTitle: {
    fontSize: 22,
    fontWeight: "bold",
    // marginBottom: 10,
  },
  filterCategoryHeading: {
    height: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 10,
  },
  categoryText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },

  subcategory: {
    height: 100,
    borderWidth: 1,
    backgroundColor: "pink",
    paddingLeft: 10,
    paddingRight: 10,
  },
  subCategoryHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sliderContainer: {
    // borderWidth: 1,
  },

  sliderWrapper: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
  },
});

export default Filter;
