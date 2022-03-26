import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
//Set up redux

export default function App() {
 //Provider makes redux accessible to surrounded components
  return (
    
    <Provider store={store}>
      <HomeScreen />
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
