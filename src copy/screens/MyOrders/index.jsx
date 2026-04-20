import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import { Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../components/Footer';
import SpriteIcon from '../../components/SpriteIcon';
import colors from '../../assests/colors';

/* ---------- OPTIONS ---------- */
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

/* ---------- ORDERS ---------- */
const ORDERS = [
  {
    id: '1',
    status: 'Order Placed',
    orderNo: 'JP41888',
    title: 'Women Purple Cotton Round Neck Straight Fit',
    details: 'Color: Purple, Size: M, Qty: 1',
    price: '₹ 2,190.00',
    action: 'Cancel',
    type: 'placed',
    image:
      'https://imagescdn.jaypore.com/img/app/product/4/40019677-20862151.jpg',
  },
  {
    id: '2',
    status: 'Delivered',
    subText: 'Delivered by 22 Oct 2024',
    orderNo: 'JP41888',
    title: 'Women Purple Cotton Round Neck Straight Fit',
    details: 'Color: Purple, Size: M, Qty: 1',
    price: '₹ 2,190.00',
    action: 'Return',
    type: 'delivered',
    image:
      'https://imagescdn.jaypore.com/img/app/product/4/40019677-20862151.jpg',
  },
  {
    id: '3',
    status: 'Item Shipped',
    orderNo: 'JP41888',
    title: 'Women Purple Cotton Round Neck Straight Fit',
    details: 'Color: Purple, Size: M, Qty: 1',
    price: '₹ 2,190.00',
    action: 'Track Shipment',
    type: 'shipped',
    image:
      'https://imagescdn.jaypore.com/img/app/product/4/40019677-20862151.jpg',
  },
  {
    id: '4',
    status: 'Refunded',
    orderNo: 'JP41888',
    title: 'Women Purple Cotton Round Neck Straight Fit',
    details: 'Color: Purple, Size: M, Qty: 1',
    price: '₹ 2,190.00',
    type: 'Refunded',
    image:
      'https://imagescdn.jaypore.com/img/app/product/4/40019677-20862151.jpg',
  },
];
/* ---------- SPRITE MAP ---------- */
const STATUS_SPRITES = {
  placed: {
    x: 200,
    y: 200,
    w: 32,
    h: 32,
    spriteWidth: 25,
    spriteHeight: 20,
  },
  delivered: {
    x: 20,
    y: 250,
    w: 32,
    h: 32,
    spriteWidth: 20,
    spriteHeight: 20,
  },
  shipped: {
    x: 0,
    y: 250,
    w: 24,
    h: 24,
    spriteWidth: 20,
    spriteHeight: 20,
  },
  Refunded: {
    x: 1410,
    y: 225,
    w: 32,
    h: 32,
    spriteWidth: 15,
    spriteHeight: 6,
  },
};
/* ---------- FILTER BUTTON ---------- */
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
/* ---------- MODAL ---------- */
const OptionsModal = ({
  visible,
  title,
  data,
  selectedValue,
  valueKey,
  onClose,
  update,
}) => (
  <Modal visible={visible} transparent animationType="slide">
    <View style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>{title}</Text>
          <TouchableOpacity onPress={onClose}>
            <Icon source="close" size={22} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() => {
                update(valueKey, item);
                onClose();
              }}
            >
              <View
                style={[
                  styles.checkbox,
                  selectedValue === item && styles.checkboxSelected,
                ]}
              >
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
/* ---------- MAIN ---------- */
export default function MyOrders() {
  const navigation = useNavigation();
  const [state, setState] = useState({
    statusModal: false,
    timeModal: false,
    selectedStatus: 'All status',
    selectedTime: 'Past 6 months',
    search: '',
  });
  const update = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Orders</Text>
      {/* FILTERS */}
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
      {/* SEARCH */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search Order"
          style={styles.searchInput}
          value={state.search}
          onChangeText={(v) => update('search', v)}
        />
        <Icon source="magnify" size={22} />
      </View>
      {/* ORDERS */}
      <View style={styles.OrderContainer}>
        {ORDERS.map((item) => {
          const sprite = STATUS_SPRITES[item.type] || STATUS_SPRITES.placed;
          return (
            <View key={item.id} style={styles.card}>
              {/* STATUS */}
              <View style={styles.statusBar}>
                <View style={styles.statusLeft}>
                  <SpriteIcon {...sprite} />
                  <View>
                    <Text style={styles.statusText}>{item.status}</Text>
                    {item.subText && (
                      <Text style={styles.subText}>{item.subText}</Text>
                    )}
                  </View>
                </View>
                <Text style={styles.orderNo}>Order No - {item.orderNo}</Text>
              </View>
              {/* PRODUCT */}
              <View style={styles.row}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.ProductContainer}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.details}>{item.details}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </View>
              {/* ACTION BUTTON */}
              {item.action && (
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() =>
                    navigation.navigate('OrderDetails', { order: item })
                  }
                >
                  <Text style={styles.btnText}>{item.action}</Text>
                </TouchableOpacity>
              )}
              {/* EXTRA TEXT */}
              {item.type === 'delivered' && (
                <Text style={styles.returnText}>
                  Return window closes on 22 Oct 2024
                </Text>
              )}
              {item.type === 'shipped' && (
                <Text style={styles.refundText}>AWB No- 5874854578</Text>
              )}
            </View>
          );
        })}
      </View>
      <Footer />
      {/* MODALS */}
      <OptionsModal
        visible={state.statusModal}
        title="STATUS"
        data={STATUS_OPTIONS}
        selectedValue={state.selectedStatus}
        valueKey="selectedStatus"
        onClose={() => update('statusModal', false)}
        update={update}
      />
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
/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
  OrderContainer: {
    paddingHorizontal: 16,
  },
  ProductContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.grayColor1,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    padding: 16,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    color: colors.grayColor17,
  },
  bold: {
    fontWeight: '700',
    color: colors.blackColor1,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    margin: 16,
    paddingHorizontal: 10,
    backgroundColor: colors.whiteColor1,
  },
  searchInput: {
    flex: 1,
  },
  card: {
    backgroundColor: colors.whiteColor1,
    marginBottom: 20,
  },
  statusBar: {
    backgroundColor: colors.creamColor9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusText: {
    fontWeight: '600',
  },
  subText: {
    fontSize: 12,
    color: colors.grayColor17,
  },
  orderNo: {
    color: colors.brownColor7,
    textDecorationLine: 'underline',
  },
  row: {
    flexDirection: 'row',
    padding: 12,
  },
  image: {
    width: 70,
    height: 90,
    marginRight: 10,
  },
  titleText: {
    fontWeight: '600',
  },
  details: {
    fontSize: 12,
    color: colors.grayColor17,
  },
  price: {
    marginTop: 6,
  },
  btn: {
    borderWidth: 1,
    borderColor: colors.brownColor7,
    margin: 12,
    padding: 10,
    alignItems: 'center',
  },
  btnText: {
    color: colors.brownColor7,
  },
  returnText: {
    textAlign: 'center',
    color: colors.brownColor7,
    marginBottom: 10,
  },
  refundText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.blackOpacityColor3,
  },
  modalContainer: {
    backgroundColor: colors.whiteColor1,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: colors.brownColor7,
  },
  optionText: {
    fontSize: 16,
  },
});
