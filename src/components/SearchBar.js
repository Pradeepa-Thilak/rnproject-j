import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput,StyleSheet,Pressable,FlatList,Text,} from 'react-native';
import { Icon } from 'react-native-paper';
import { searchData } from '../lib/SearchData';
const SearchBar = ({ onSearch, onSelectSuggestion, autoFocus = false }) => {
  const [state, setState] = useState({
    query: '',
    suggestions: [],
    showDropdown: false,
  });
  const debounceTimer = useRef(null);
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      if (onSearch) onSearch(state.query);

      if (state.query.trim().length >= 3) {
        const filtered = searchData.filter(item =>
          item.toLowerCase().includes(state.query.toLowerCase())
        );
        setState(prev => ({
          ...prev,
          suggestions: filtered,
          showDropdown: filtered.length > 0,
        }));
      } else {
        setState(prev => ({
          ...prev,
          suggestions: [],
          showDropdown: false,
        }));
      }
    }, 500);
    return () => {
      clearTimeout(debounceTimer.current);
    };
  }, [state.query]);

  const handleClear = () => {
    setState({ query: '', suggestions: [], showDropdown: false });
    if (onSearch) onSearch('');
  };

  const handleSelect = (item) => {
    setState({ query: item, suggestions: [], showDropdown: false });
    if (onSelectSuggestion) onSelectSuggestion(item);
  };

  const handleChangeText = (text) => {
    setState(prev => ({ ...prev, query: text }));
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputRow}>
        <Icon source="magnify" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#aaa"
          value={state.query}
          onChangeText={handleChangeText}
          autoFocus={autoFocus}
          returnKeyType="search"
          onSubmitEditing={() =>
            setState(prev => ({ ...prev, showDropdown: false }))
          }
        />
        {state.query.length > 0 && (
          <Pressable onPress={handleClear} >
            <Icon source="close" size={18} color="#888" />
          </Pressable>
        )}
      </View>

      {state.showDropdown && (
        <View style={styles.dropdown}>
          <View style={styles.dashedLine} />
          <FlatList
            data={state.suggestions}
            keyExtractor={(item, index) => index.toString()}
            keyboardShouldPersistTaps="handled"
            scrollEnabled={true}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={true}
            style={styles.flatList}
            renderItem={({ item }) => (
              <Pressable
                style={styles.suggestionItem}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.suggestionText}>{item}</Text>
              </Pressable>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    zIndex: 999,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#212121',
    marginLeft: 8,
    paddingVertical: 0,
    fontFamily: 'Lato-Regular',
  },
  dropdown: {
    position: 'absolute',
    top: 46,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderTopWidth: 0,
    zIndex: 999,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    maxHeight: 220,
  },
  flatList: {
    maxHeight: 220,
  },
  dashedLine: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#bbb',
    marginHorizontal: 12,
    marginBottom: 4,
  },
  suggestionItem: {
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
  suggestionText: {
    fontSize: 14,
    color: '#212121',
    fontFamily: 'Lato-Regular',
  },
  separator: {
    height: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default SearchBar;