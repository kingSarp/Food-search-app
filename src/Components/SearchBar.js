import React from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} color="black" />
      <TextInput
        value={term}
        style={styles.inputStyle}
        placeholder="search"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15,
    marginBottom:10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 23,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
