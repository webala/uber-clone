import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
//Set up redux

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Let's build uber</Text>
    </View>
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
