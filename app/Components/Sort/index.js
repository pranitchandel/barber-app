import {
  View,
  Text,
  StyleSheet,
  Animated,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Overlay } from "@rneui/themed";
import { useEffect, useRef } from "react";
import RadioUnchecked from "../Icons/RadioUnchecked";

const Sort = ({ visible, setVisible }) => {
  const progress = useRef(new Animated.Value(0)).current;
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
    <Animated.View>
      <Overlay
        isVisible={visible}
        onBackdropPress={() => setVisible(!visible)}
        overlayStyle={styles.overlayStyle}
      >
        <View style={styles.container}>
          <Text style={styles.sortTitle}>Sort by</Text>
          <View style={styles.sortListWrapper}>
            <Text style={styles.listHeading}>Waiting time low to high</Text>
            <TouchableOpacity onPress={() => console.log("Sorted by time")}>
              <RadioUnchecked width={25} height={25} color={"black"} />
            </TouchableOpacity>
          </View>
          <View style={styles.sortListWrapper}>
            <Text style={styles.listHeading}>Distance low to high</Text>
            <TouchableOpacity onPress={() => console.log("Sorted by distance")}>
              <RadioUnchecked width={25} height={25} color={"black"} />
            </TouchableOpacity>
          </View>
          <View style={styles.sortListWrapper}>
            <Text style={styles.listHeading}>Rating high to low</Text>
            <TouchableOpacity onPress={() => console.log("Sorted by rating")}>
              <RadioUnchecked width={25} height={25} color={"black"} />
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  overlayStyle: {
    backgroundColor: "rgba(0,0,0,.5)",
    width: "90%",
    height: "30%",
    padding: 0,
    borderRadius: 16,
    backgroundColor: "pink",
  },
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderRadius: 16,
    padding: 20,
  },
  sortTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  sortListWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 10,
    paddingRight: 10,
  },

  listHeading: {
    fontSize: 20,
  },
});

export default Sort;
