import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Animated,
  FlatList
} from 'react-native';
import { Checkbox, Icon, IconButton } from 'react-native-paper';
import ModalCom from './ModalCom';


const { width, height } = Dimensions.get('window');

const SortAndFilter = ({ sortValues, filterData }) => {
  const [sortValue, setSort] = useState('Popular');
  const [filterValue, setFilterValue] = useState(0);

  const [sortModal, setSortModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  const slide = useRef(new Animated.Value(-width)).current;
  const slideY = useRef(new Animated.Value(height)).current;

  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    if (filterModal) {
      slide.setValue(-width);
      Animated.timing(slide, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [filterModal]);

  useEffect(() => {
    if (sortModal) {
      slideY.setValue(height);
      Animated.timing(slideY, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [sortModal]);

  const closeFilterModal = () => {
    Animated.timing(slide, {
      toValue: -width,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => setFilterModal(false));
  };

  const closeSortModel = () => {
    Animated.timing(slideY, {
      toValue: height,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => setSortModal(false));
  };

  const toggleCheck = (filterName, value) => {
    setSelectedFilters(prev => {
      const current = prev[filterName] || [];

      if (current.includes(value)) {
        return {
          ...prev,
          [filterName]: current.filter(v => v !== value),
        };
      }
      return {
        ...prev,
        [filterName]: [...current, value],
      };
    });
  };

  const renderSort = item => (
    <Pressable
      style={styles.valueContainer}
      onPress={() => {
        setSort(item);
        setSortModal(false);
      }}
    >
      <Text
        style={[
          styles.valueText,
          sortValue === item
            ? {
                backgroundColor: '#f9eddf',
                fontFamily: 'Lato-Bold',
              }
            : { fontFamily: 'Lato-Regular' },
        ]}
      >
        {item}
      </Text>
    </Pressable>
  );

  const renderFilterLeft = (item, index) => (
    <Pressable
      style={[
        styles.filterContain,
        filterValue === index
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#ededed' },
      ]}
      onPress={() => setFilterValue(index)}
    >
      <Text style={styles.filterText}>{item.filter}</Text>
      {selectedFilters[item.filter] && (
        <Text style={styles.filterCount}>
          {selectedFilters[item.filter]?.length}
        </Text>
      )}
    </Pressable>
  );

  const renderFilterRight = item => {
    const filterName = filterData[filterValue].filter;
    const selected = selectedFilters[filterName] || [];

    return (
      <View style={styles.filterData}>
        <Pressable style={styles.filterData1}>
          <Checkbox
            status={selected.includes(item.name) ? 'checked' : 'unchecked'}
            onPress={() => toggleCheck(filterName, item.name)}
            color="#bb4225"
            uncheckedColor="#bb4225"
          />
          <Text style={styles.filterDataTxt}>{item.name}</Text>
        </Pressable>
        <Text style={styles.filterDataTot}>({item.total})</Text>
      </View>
    );
  };

  console.log(selectedFilters);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Pressable
          style={[styles.contain, { borderRightWidth: 2 }]}
          onPress={() => {
            console.log('sort modal0');
            setSortModal(true)
          }}
        >
          <Icon source={'sort'} size={25} />
          <View>
            <Text style={styles.containText}>Sort by</Text>
            <Text style={styles.sortVal}>{sortValue}</Text>
          </View>
        </Pressable>
        <Pressable style={styles.contain} onPress={() => setFilterModal(true)}>
          <Icon source={'filter-outline'} size={25} />
          <Text style={styles.containText}>Filters </Text>
        </Pressable>

        {/* Sort Modal */}
        <ModalCom open={sortModal} close={closeSortModel} bgcolor={'#fffaf7'}>
          <Animated.View
            style={{
              transform: [{ translateY: slideY }],
            }}
          >
            <View style={{ paddingBottom: 15 }}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                  marginBottom: 12,
                }}
              >
                <View style={styles.sortContain}>
                  <Text style={styles.sortText}>Sort By</Text>
                  <IconButton
                    icon={'close'}
                    size={26}
                    onPress={() => closeSortModel()}
                  />
                </View>
              </View>
              <FlatList
                data={sortValues}
                keyExtractor={index => index.toString()}
                renderItem={({ item }) => renderSort(item)}
              />
            </View>
          </Animated.View>
        </ModalCom>

        {/* Filter Modal */}
        <ModalCom open={filterModal} close={closeFilterModal}>
          <Animated.View
            style={{
              width: width,
              backgroundColor: '#fff',
              transform: [{ translateX: slide }],
            }}
          >
            {/* <View> */}
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
              }}
            >
              {/* Header */}
              <View style={styles.sortContain}>
                <Text style={styles.sortText}>Filter By</Text>
                <IconButton
                  icon={'close'}
                  size={26}
                  onPress={() => closeFilterModal()}
                />
              </View>
            </View>

            {/* Filter data */}
            <View style={styles.filterWhole}>
              <FlatList
                data={filterData}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => renderFilterLeft(item, index)}
                style={styles.filterFirst}
              />

              <View style={{ width: '60%' }}>
                <FlatList
                  data={filterData[filterValue].data}
                  keyExtractor={(index, item) => index + item}
                  renderItem={({ item }) => renderFilterRight(item)}
                  style={{
                    paddingVertical: 15,
                    paddingLeft: 18,
                    paddingRight: 15,
                  }}
                />
              </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Pressable
                style={[styles.button, styles.clear]}
                onPress={() => setSelectedFilters({})}
              >
                <Text style={[styles.btnText, { color: '#bb4225' }]}>
                  Clear all Filters
                </Text>
              </Pressable>
              <Pressable style={[styles.button, styles.apply]}>
                <Text style={[styles.btnText, { color: '#ffff' }]}>Apply</Text>
              </Pressable>
            </View>
            {/* </View> */}
          </Animated.View>
        </ModalCom>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: 10,
  },
  containText: {
    fontFamily: 'Lato-Regular',
    textTransform: 'uppercase',
    color: '#212121',
    fontSize: 14,
    marginLeft: 5,
    letterSpacing: 0.2,
  },
  sortVal: {
    textTransform: 'capitalize',
    color: '#616161',
    fontSize: 12,
    marginLeft: 5,
    letterSpacing: 0.1,
    fontFamily: 'Lato-Regular',
  },
  sortContain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginHorizontal: 12,
    marginBottom: 12,
  },
  sortText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    marginLeft: 7,
    color: '#212121',
    letterSpacing: 0.5,
  },
  valueContainer: {
    paddingHorizontal: 16,
  },
  valueText: {
    paddingHorizontal: 11,
    fontSize: 14,
    lineHeight: 40,
  },
  filterWhole: {
    flexDirection: 'row',
    maxHeight: '80%',
  },
  filterContain: {
    paddingTop: 16,
    paddingRight: 10,
    paddingBottom: 15,
    paddingLeft: 21,
    borderBottomWidth: 1.5,
    borderBottomColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 0.2,
    flexWrap: 'wrap',
    width: '85%',
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 34,
    paddingVertical: 12,
  },
  button: {
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 6,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    letterSpacing: 0.3,
  },
  clear: {
    width: '50%',
    borderColor: '#bb4225',
  },
  apply: {
    width: '50%',
    backgroundColor: '#bb4225',
    borderColor: '#bb4225',
    marginLeft: 20,
  },
  filterData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  filterData1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '82%',
  },
  filterDataTxt: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    textTransform: 'capitalize',
    letterSpacing: 0.3,
    lineHeight: 20,
  },
  filterDataTot: {
    fontSize: 10,
    fontFamily: 'Lato-Regular',
    color: '#707070',
  },
  filterCount: {
    backgroundColor: '#bb4225',
    borderRadius: 50,
    color: '#fff',
    padding: 5,
    fontSize: 10,
    fontFamily: 'Lato-Regular',
  },
});

export default SortAndFilter;
