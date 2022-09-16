import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './navigation/StackNavigators';
import ChatBotScreen from './screens/ChatBotScreen';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
}

export default App;
