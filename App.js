import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './src/Navigation/routes';

const Stack = createNativeStackNavigator();

function App() {
  return (
   <View style={{flex:1}}>
    <routes/>
   </View>
  );
}

export default App;