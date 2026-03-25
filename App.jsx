import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './src/navigation/RootStack';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { Text, View , StyleSheet, Keyboard} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { useEffect, useState } from 'react';
import { AuthProvider } from './src/context/AuthContext';

function App() {

  const [keyboardVisible, setKeyBoardVisible] = useState(false);

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => setKeyBoardVisible(true));
    
    const hideListener = Keyboard.addListener('keyboardDidHide', () => setKeyBoardVisible(false));

    return () => {
      showListener.remove();
      hideListener.remove();
    }
  }, []);

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Provider store={store}>
          <AuthProvider>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
            {!keyboardVisible && (
              <View style={styles.logo}>
                <Text style={styles.logoText}>ADITIYA BIRLA | <Text style={[styles.logoText, {fontSize: 12}]}>FASHION</Text></Text>
              </View>
            )}
          </AuthProvider>
        </Provider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#000',
    paddingVertical: 7 ,
  },
  logoText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    letterSpacing: 0.3,
  }
})

export default App;
