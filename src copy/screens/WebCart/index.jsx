import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import ScreenWrapper from '../../components/ScreenWrapper';

const WebCart = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <WebView
          source={{ uri: 'https://www.jaypore.com/checkoutsummary' }}
          style={styles.webcartcon}
        />
      </View>
    </ScreenWrapper>
  );
};

export default WebCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webcartcon: {
    flex: 1,
  },
});
