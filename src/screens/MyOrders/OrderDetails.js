import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, } from 'react-native';
export default function OrderDetails({ route, navigation }) {
  const { order } = route.params;
  const [showBreakdown, setShowBreakdown] = useState(false);
  return (
    <ScrollView style={styles.container}>
      {/* TITLE */}
      <Text style={styles.title}>My Orders</Text>
      {/* BACK */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
      </TouchableOpacity>
      {/* TOP STATUS CARD */}
      <View style={styles.topCard}>
        <View>
          <Text style={styles.orderNo}>Order No - {order.orderNo}</Text>
          <Text style={styles.date}>Order Date - 22 Oct 2024</Text>
          <Text style={styles.info}>
            "It may take us 20-30 minutes to update your order status"
          </Text>
        </View>
        <View style={styles.statusBox}>
          <Text style={styles.statusText}>{order.status}</Text>
        </View>
      </View>
      {/* PRODUCT */}
      <View style={styles.productRow}>
        <Image source={{ uri: order.image }} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text style={styles.productTitle}>{order.title}</Text>
          <Text style={styles.productDetails}>{order.details}</Text>
          <Text style={styles.price}>{order.price}</Text>
        </View>
      </View>
         <TouchableOpacity style={styles.trackRow}>
            <Text style={styles.track}>Track Shipment</Text>
          </TouchableOpacity>
        <View style={styles.divider}/>
      {/* RETURN */}
      {order.type === 'delivered' && (
        <>
          <TouchableOpacity style={styles.returnBtn}>
            <Text style={styles.returnBtnText}>Return</Text>
          </TouchableOpacity>
          <Text style={styles.returnText}>
            Return window closes on 22 Oct 2024
          </Text>
        </>
      )}
      {/* ADDRESS */}
      <View style={styles.section}>
        <Text style={styles.heading}>Deliver to</Text>
        <Text style={styles.text}>Pavithra V</Text>
        <Text style={styles.text}>
          HSR Layout, Bangalore, Karnataka, India 560037
        </Text>
      </View>
      {/* PAYMENT */}
      <View style={styles.section}>
        <Text style={styles.heading}>Payment method</Text>
        <Text style={styles.text}>Free Order</Text>
      </View>
      {/* SHIPMENT BOX */}
      {order.type === 'shipped' && (
        <View style={styles.shipBox}>
          <Text style={styles.heading}>Shipment Details</Text>
          <Text style={styles.text}>Shipment Number - 987484</Text>
          <Text style={styles.text}>AWB Number - 58749845124</Text>
        </View>
      )}
      {/* PRICE DETAILS */}
      <View style={styles.section}>
        <Text style={styles.heading}>Price Details</Text>
        <View style={styles.row}>
          <Text>Bag Total</Text>
          <Text>₹ 4,380.00</Text>
        </View>
        <View style={styles.row}>
          <Text>Product Discounts</Text>
          <Text>-₹876.00</Text>
        </View>
        <View style={styles.row}>
          <Text>Promotions</Text>
          <Text>₹0.00</Text>
        </View>
        <View style={styles.row}>
          <Text>Jaypore Credits</Text>
          <Text>-₹1,314.00</Text>
        </View>
        <View style={styles.row}>
          <Text>Shipping Charges</Text>
          <Text>₹0.00</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.bold}>Net Payable</Text>
          <Text style={styles.bold}>₹2,190.00</Text>
        </View>        
        <View style={styles.row}>
          <Text>Total Savings</Text>
          <Text>₹2,190.00</Text>
        </View>
        <View style={styles.divider} />        
      </View>
      {/* OTHER ITEMS */}
      <View style={styles.section}>
        <Text style={styles.heading}>Other item(s) in this order</Text>
        <View style={styles.productRow}>
          <Image source={{ uri: order.image }} style={styles.image} />
          <View>
            <Text style={styles.productTitle}>{order.title}</Text>
            <Text style={styles.productDetails}>{order.details}</Text>
            <Text style={styles.price}>{order.price}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text>Grand Total</Text>
          <Text>₹2,190.00</Text>
        </View>
        <View style={styles.breakdownRow}>
            <TouchableOpacity  onPress={() => setShowBreakdown(true)}>
                <Text style={styles.breakdown}>View breakdown</Text>
            </TouchableOpacity>
        </View>            
        <View style={styles.row}>
          <Text>Status</Text>
          <Text>{order.status}</Text>
        </View>
      </View>
      <Modal visible={showBreakdown} transparent animationType="fade">
        <View style={styles.modalBg}>
          <View style={styles.modalBox}>
            <Text style={styles.heading}>Price Details</Text>
            <View style={styles.row}>
              <Text>Bag Total</Text>
              <Text>₹ 4,380.00</Text>
            </View>
            <View style={styles.row}>
              <Text>Product Discounts</Text>
              <Text>-₹876.00</Text>
            </View>
            <View style={styles.row}>
              <Text>Promotions</Text>
              <Text>₹0.00</Text>
            </View>            
            <View style={styles.row}>
              <Text>Jaypore Credits</Text>
              <Text>-₹1,314.00</Text>
            </View>
            <View style={styles.row}>
              <Text>Shipping Charges</Text>
              <Text>₹0.00</Text>
            </View>            
            <View style={styles.divider} />
            <View style={styles.row}>
              <Text style={styles.bold}>Net Payable</Text>
              <Text style={styles.bold}>₹2,190.00</Text>
            </View>
            <View style={styles.row}>
              <Text>Total Savings</Text>
              <Text>₹2,190.00</Text>
            </View>
            <TouchableOpacity onPress={() => setShowBreakdown(false)}>
              <Text style={styles.close}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
/* STYLES */
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
    },
  title: { 
    fontSize: 22, 
    fontWeight: '700', 
    padding: 16 
    },
  back: { 
    marginLeft: 16, 
    marginBottom: 10 
    },
  topCard: {
    backgroundColor: '#efe2d3',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderNo: { 
    fontWeight: '600' 
    },
  date: { 
    marginTop: 4 
    },
  info: { 
    fontSize: 12, 
    marginTop: 4 
    },
  statusBox: {
    backgroundColor: '#4caf50',
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 4,
    height: 28,
  },
  statusText: { 
    color: '#fff' 
    },
  productRow: {
    flexDirection: 'row',
    padding: 12,
  },
  image: { 
    width: 70, 
    height: 90, 
    marginRight: 10 
    },
  productTitle: { 
    fontWeight: '600' 
    },
  productDetails: { 
    fontSize: 12, 
    color: '#666' 
    },
  price: { 
    marginTop: 6 
    },
  track: {
    color: '#bb4425',
    marginTop: 6,
    textDecorationLine: 'underline',
  },
  returnBtn: {
    borderWidth: 1,
    borderColor: '#bb4425',
    margin: 12,
    padding: 10,
    alignItems: 'center',
  },
  returnBtnText: { 
    color: '#bb4425' 
    },
  returnText: {
    textAlign: 'center',
    color: '#bb4425',
    marginBottom: 10,
  },
  section: { 
    padding: 16 
    },
  heading: { 
    fontWeight: '700', 
    marginBottom: 6 
    },
  text: { 
    color: '#444' 
    },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  bold: { 
    fontWeight: '700' 
    },
  breakdown: {
    color: '#bb4425',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  breakdownRow: {
    alignItems: 'flex-end',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  shipBox: {
    backgroundColor: '#efe2d3',
    padding: 12,
    margin: 16,
    borderRadius: 6,
  },
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 16,
    borderRadius: 8,
  },
  close: {
    textAlign: 'center',
    marginTop: 10,
    color: '#bb4425',
  },
  trackRow: {
    paddingHorizontal: 10,
  },
});