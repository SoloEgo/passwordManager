import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/auth';
import Signup from './screens/Signup';
import SignIn from './screens/SignIn';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="SignUp" component={Signup} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
  );
}