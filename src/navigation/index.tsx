import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppScreenName, RootStackParamList} from './route';
import People from '../screens/People';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={AppScreenName.PEOPLE}>
        <Stack.Screen name={AppScreenName.PEOPLE} component={People} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
