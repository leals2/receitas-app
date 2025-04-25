import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ReceitaScreen from './screens/ReceitaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Receitas Deliciosas' }}
        />
        <Stack.Screen 
          name="Receita" 
          component={ReceitaScreen} 
          options={({ route }) => ({ title: route.params.receita.nome })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}