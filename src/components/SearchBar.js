import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
 return (
  <View style={styles.backgroundStyle}>
    <Feather name="search" style={styles.iconStyle} />
    <TextInput 
      placeholder="Search"
      autoCapitalize='none'
      autoCorrect={false}
      style={styles.inputStyle}
      value={term}
      onChangeText={newTerm => onTermChange(newTerm)}
      onEndEditing={() => onTermSubmit()}
    />
  </View>
 )
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#ddd',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }

});

export default SearchBar;