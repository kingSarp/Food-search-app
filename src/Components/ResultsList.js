import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
// import { withNavigation } from "@react-navigation/compat";
import { useNavigation } from "@react-navigation/native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Results", { id: item.id })}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default ResultsList;
