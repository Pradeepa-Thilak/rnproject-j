import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, ScrollView, TextInput, } from 'react-native';
import { Icon } from 'react-native-paper';
import Footer from '../../components/Footer';
const STATUS_OPTIONS = [
  'All status',
  'Cancelled',
  'Unsuccessful',
  'Order Processing',
  'Delivered',
];
const TIME_OPTIONS = [
  'All Orders',
  'Past 6 months',
  '2025',
  '2024',
  '2023',
  'Archived Orders',
];
const INITIAL_STATE = {
  statusModal:    false,
  timeModal:      false,
  selectedStatus: 'All status',
  selectedTime:   'Past 6 months',
  search:         '',
};
const FilterButton = ({ label, value, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.filterBtn}>
      <Text style={styles.filterText}>
        {label}: <Text style={styles.bold}>{value}</Text>
      </Text>
      <Icon source="chevron-down" size={16} color="#666" />
    </View>
  </TouchableOpacity>
);
const OptionsModal = ({ visible, title, data, selectedValue, valueKey, onClose, update }) => (
  <Modal visible={visible} transparent animationType="slide">
    <View style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>{title}</Text>
          <TouchableOpacity onPress={onClose}>
            <Icon source="close" size={22} color="#212121" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.optionRow,
                selectedValue === item && styles.optionRowSelected,
              ]}
              onPress={() => {
                update(valueKey, item);
                onClose();
              }}
            >
              <View style={[
                styles.checkbox,
                selectedValue === item && styles.checkboxSelected,
              ]}>
                {selectedValue === item && (
                  <Icon source="check" size={14} color="#fff" />
                )}
              </View>
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  </Modal>
);
export default function MyOrders() {
  const [state, setState] = useState(INITIAL_STATE);
  const update = (key, value) => {
    setState(prev => ({ ...prev, [key]: value }));
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Orders</Text>
      <View style={styles.filterRow}>
        <FilterButton
          label="STATUS"
          value={state.selectedStatus}
          onPress={() => update('statusModal', true)}
        />
        <FilterButton
          label="TIME"
          value={state.selectedTime}
          onPress={() => update('timeModal', true)}
        />
      </View>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          value={state.search}
          onChangeText={v => update('search', v)}
        />
        <Icon source="magnify" size={22} color="#666" />
      </View>
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No Orders Found</Text>
      </View>
      <Footer />
      {/* STATUS MODAL */}
      <OptionsModal
        visible={state.statusModal}
        title="STATUS"
        data={STATUS_OPTIONS}
        selectedValue={state.selectedStatus}
        valueKey="selectedStatus"
        onClose={() => update('statusModal', false)}
        update={update}
      />
      {/* TIME MODAL */}
      <OptionsModal
        visible={state.timeModal}
        title="TIME"
        data={TIME_OPTIONS}
        selectedValue={state.selectedTime}
        valueKey="selectedTime"
        onClose={() => update('timeModal', false)}
        update={update}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Lato-Bold',
    fontWeight: '700',
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingTop: 16,
    color: '#212121',
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Lato-Regular',
  },
  bold: {
    fontWeight: '700',
    color: '#212121',
    fontFamily: 'Lato-Bold',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 40,
    marginHorizontal: 16,
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Lato-Regular',
    color: '#212121',
    fontSize: 14,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  emptyText: {
    fontSize: 18,
    color: '#bb4425',
    fontFamily: 'Lato-Regular',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: '50%',
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 25,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    fontWeight: '700',
    color: '#212121',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    paddingHorizontal: 8,
    paddingVertical: 14,
    borderRadius: 6,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: '#aaa',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  checkboxSelected: {
    backgroundColor: '#bb4425',
    borderColor: '#bb4425',
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#212121',
  },
});