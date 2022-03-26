import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './screens/Signup';
import SignIn from './screens/SignIn';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Signup />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    overflow: 'hidden'
  },
});
