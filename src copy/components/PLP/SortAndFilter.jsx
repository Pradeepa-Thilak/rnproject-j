import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Animated,
  FlatList,
} from 'react-native';
import colors from '../../assests/colors';
import { Checkbox, Icon, IconButton } from 'react-native-paper';
import ModalCom from './ModalCom';
import fonts from '../../assests/fonts';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
const { width, height } = Dimensions.get('window');
// const sliderLength = width * 0.5;

const SortAndFilter = ({ sortValues, filterData }) => {
  const [sortValue, setSort] = useState('Popular');
  const [filterValue, setFilterValue] = useState(0);

  const [sortModal, setSortModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  const [slideYRef] = useState(new Animated.Value(height));
  const [slideRef] = useState(new Animated.Value(-width));

  const [selectedFilters, setSelectedFilters] = useState({});

  const [priceRange, setPriceRange] = useState([995, 19990]);

  useEffect(() => {
    if (filterModal) {
      slideRef.setValue(-width);
      Animated.timing(slideRef, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [filterModal]);

  useEffect(() => {
    if (sortModal) {
      slideYRef.setValue(height * 0.3);

      Animated.timing(slideYRef, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [sortModal]);
  const closeFilterModal = () => {
    Animated.timing(slideRef, {
      toValue: -width,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => setFilterModal(false));
  };

  const closeSortModel = () => {
    Animated.timing(slideYRef, {
      toValue: height,
      duration: 250,
      useNativeDriver: true,
    }).start(() => setSortModal(false));
  };

  const toggleCheck = (filterName, value) => {
    setSelectedFilters((prev) => {
      const current = prev[filterName] || [];

      if (current.includes(value)) {
        return {
          ...prev,
          [filterName]: current.filter((v) => v !== value),
        };
      }
      return {
        ...prev,
        [filterName]: [...current, value],
      };
    });
  };

  const renderSort = (item) => (
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
          sortValue === item ? styles.sortActive : styles.sortInactive,
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
        filterValue === index ? styles.filterActive : styles.filterInactive,
      ]}
      onPress={() => setFilterValue(index)}
    >
      <Text style={styles.filterText}>{item.filter}</Text>
      {selectedFilters[item.filter]?.length > 0 && (
        <Text style={styles.filterCount}>
          {selectedFilters[item.filter].length}
        </Text>
      )}
    </Pressable>
  );

  const renderFilterRight = (item) => {
    const filterName = filterData[filterValue].filter;
    const selected = selectedFilters[filterName] || [];

    return (
      <View style={styles.filterData}>
        <Pressable style={styles.filterData1}>
          <Checkbox
            status={selected.includes(item.name) ? 'checked' : 'unchecked'}
            onPress={() => toggleCheck(filterName, item.name)}
            color={colors.brownColor1}
            uncheckedColor={colors.brownColor1}
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
      <View style={styles.row}>
        <Pressable
          style={[styles.contain, styles.rightBorder]}
          onPress={() => {
            console.log('sort modal0');
            setSortModal(true);
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

        <ModalCom
          open={sortModal}
          close={closeSortModel}
          bgcolor={colors.creamColor15}
        >
          <Animated.View
            style={{
              transform: [{ translateY: slideYRef }],
            }}
          >
            <View style={styles.sortWrapper}>
              <View style={styles.headerBorder}>
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
                keyExtractor={(index) => index.toString()}
                renderItem={({ item }) => renderSort(item)}
              />
            </View>
          </Animated.View>
        </ModalCom>

        <ModalCom open={filterModal} close={closeFilterModal}>
          <Animated.View
            style={[
              styles.filterAnimated,
              { transform: [{ translateX: slideRef }] }, // dynamic stays
            ]}
          >
            <View style={styles.headerBorder}>
              <View style={styles.sortContain}>
                <Text style={styles.sortText}>Filter By</Text>
                <IconButton
                  icon={'close'}
                  size={26}
                  onPress={() => closeFilterModal()}
                />
              </View>
            </View>

            <View style={styles.filterWhole}>
              <FlatList
                data={filterData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => renderFilterLeft(item, index)}
                style={styles.filterFirst}
              />

              <View style={styles.filterRight}>
                {filterData[filterValue].filter === 'price' ? (
                  <View style={styles.filterList}>
                    <View style={styles.pricerange}>
                      <Text style={styles.pricetxt}>Enter a price range</Text>

                      <View style={styles.pricecon}>
                        <View style={styles.pricebox}>
                          <Text>₹ {priceRange[0]}</Text>
                        </View>
                        <View style={styles.seperator}>
                          <Text>-</Text>
                        </View>
                        <View style={styles.pricebox}>
                          <Text>₹ {priceRange[1]}</Text>
                        </View>
                      </View>
                      <View style={styles.sliderWrapper}>
                        <MultiSlider
                          values={priceRange}
                          min={0}
                          max={20000}
                          step={100}
                          sliderLength={200}
                          onValuesChange={(values) => setPriceRange(values)}
                          selectedStyle={styles.pricethumbcolor}
                          markerStyle={styles.pricethumbcolor}
                          trackStyle={styles.trackStyle}
                        />
                      </View>
                    </View>
                  </View>
                ) : (
                  <FlatList
                    data={filterData[filterValue].data}
                    keyExtractor={(index, item) => index + item}
                    renderItem={({ item }) => renderFilterRight(item)}
                    style={styles.filterList}
                  />
                )}
              </View>
            </View>

            <View style={styles.footer}>
              <Pressable
                style={[styles.button, styles.clear]}
                onPress={() => setSelectedFilters({})}
              >
                <Text style={[styles.btnText, styles.clearText]}>
                  Clear all Filters
                </Text>
              </Pressable>
              <Pressable style={[styles.button, styles.apply]}>
                <Text style={[styles.btnText, styles.applyText]}>Apply</Text>
              </Pressable>
            </View>
          </Animated.View>
        </ModalCom>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderWrapper: {
    marginHorizontal: 5,
  },
  pricebox: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 1,
    paddingRight: 2,
    paddingLeft: 16,
    height: 35,
    backgroundColor: colors.grayColor27,
  },
  pricetxt: {
    fontSize: 16,
    color: colors.grayColor22,
    lineHeight: 20,
    fontFamily: fonts.LatoRegular,
    letterSpacing: 0.38,
  },

  trackStyle: { height: 3 },

  pricerange: {
    width: '100%',
  },

  pricecon: {
    // width: '89%',
    marginVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },

  pricethumbcolor: {
    backgroundColor: '#bb4225',
  },
  seperator: {
    textAlign: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: colors.whiteColor1,
  },

  rightBorder: {
    borderRightWidth: 2,
  },

  sortWrapper: {
    paddingBottom: 15,
  },

  headerBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grayColor6,
    marginBottom: 12,
  },

  filterRight: {
    width: '60%',
  },

  filterList: {
    paddingVertical: 15,
    paddingLeft: 18,
    paddingRight: 15,
  },

  sortActive: {
    backgroundColor: colors.creamColor4,
    fontFamily: fonts.LatoBold,
  },

  sortInactive: {
    fontFamily: fonts.LatoRegular,
  },

  filterActive: {
    backgroundColor: colors.whiteColor1,
  },

  filterInactive: {
    backgroundColor: colors.grayColor27,
  },

  clearText: {
    color: colors.brownColor1,
  },

  applyText: {
    color: colors.whiteColor1,
  },

  filterAnimated: {
    width: width,
    backgroundColor: colors.whiteColor1,
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    paddingVertical: 10,
  },
  containText: {
    fontFamily: fonts.LatoRegular,
    textTransform: 'uppercase',
    color: colors.grayColor22,
    fontSize: 14,
    marginLeft: 5,
    letterSpacing: 0.2,
  },
  sortVal: {
    textTransform: 'capitalize',
    color: colors.grayColor11,
    fontSize: 12,
    marginLeft: 5,
    letterSpacing: 0.1,
    fontFamily: fonts.LatoRegular,
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
    fontFamily: fonts.LatoBold,
    fontSize: 16,
    marginLeft: 7,
    color: colors.grayColor22,
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
    borderBottomColor: colors.whiteColor1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterText: {
    fontFamily: fonts.LatoBold,
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
    fontFamily: fonts.LatoBold,
    letterSpacing: 0.3,
  },
  clear: {
    width: '50%',
    borderColor: colors.brownColor1,
  },
  apply: {
    width: '50%',
    backgroundColor: colors.brownColor1,
    borderColor: colors.brownColor1,
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
    width: '70%',
  },
  filterDataTxt: {
    fontSize: 14,
    fontFamily: fonts.LatoRegular,
    flexWrap: 'wrap',
    textTransform: 'capitalize',
    letterSpacing: 0.14,
    lineHeight: 20,
  },
  filterDataTot: {
    fontSize: 10,
    fontFamily: fonts.LatoRegular,
    color: colors.grayColor14,
  },
  filterCount: {
    backgroundColor: colors.brownColor1,
    borderRadius: 50,
    color: colors.whiteColor1,
    padding: 5,
    fontSize: 10,
    fontFamily: fonts.LatoRegular,
  },
});

export default SortAndFilter;
