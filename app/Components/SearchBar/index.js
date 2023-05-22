import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SearchBar } from "react-native-elements";

const SearchBarComp = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.searchbar}>
      <SearchBar
        placeholder="Search..."
        onChangeText={(value) => {
          setSearch(value);
        }}
        value={search}
        lightTheme
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },

  searchInput: {
    margin: 5,
    width: "100%",
    height: 50,
    backgroundColor: "pink",
  },

  containerStyle: {
    width: "100%",
    backgroundColor: "none",
    margin: 0,
    border: "none",
  },

  inputContainerStyle: {
    width: "100%",
    backgroundColor: "white",
    margin: 0,
    border: "none",
  },
});

export default SearchBarComp;
