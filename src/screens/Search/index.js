import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import SearchBar from '../../components/SearchBar';

const Search = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (query) => {
    setSearchQuery(query);

    if (!query || query.trim() === '') {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      // Replace this with your actual API call
      // const response = await fetch(`your-api-url?q=${query}`);
      // const data = await response.json();
      // setResults(data.results);

      // Placeholder: simulate API delay
      setTimeout(() => {
        setResults([]);
        setLoading(false);
      }, 300);
    } catch (error) {
      console.error('Search error:', error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Search bar with debounce built in */}
      <SearchBar onSearch={handleSearch} autoFocus={true} />

      {loading && (
        <ActivityIndicator size="small" color="#bb4225" style={{ marginTop: 20 }} />
      )}

      {!loading && searchQuery.length > 0 && results.length === 0 && (
        <Text style={styles.noResults}>No results found for "{searchQuery}"</Text>
      )}

      {!loading && results.length > 0 && (
        <FlatList
          data={results}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              <Text style={styles.resultText}>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  noResults: {
    textAlign: 'center',
    marginTop: 30,
    color: '#888',
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },
  resultItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#212121',
  },
});

export default Search;