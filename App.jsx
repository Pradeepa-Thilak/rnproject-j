import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './src/navigation/RootStack';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { Text, View , StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Provider store={store}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
          <View style={styles.logo}>
            <Text style={styles.logoText}>ADITIYA BIRLA | <Text style={[styles.logoText, {fontSize: 12}]}>FASHION</Text></Text>
          </View>
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
