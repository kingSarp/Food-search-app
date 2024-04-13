import React, { useState } from "react";
import { Text, StyleSheet, View, Button, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import ResultsList from "../Components/ResultsList";

import useResult from "../hooks/useResult";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResult();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((results) => {
      return results.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        {/* <Text>We have found {results.length} results</Text> */}
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricer" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default SearchScreen;
