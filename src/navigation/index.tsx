import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import {AppScreenName, RootStackParamList} from './route';
import RegisterScreen from '../screens/Register';
import {useAppSelector} from '../redux/hook';
import {selectUser} from '../redux/feature/user/slice';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const {success} = useAppSelector(selectUser);
  return (
    <NavigationContainer>
      {success ? (
        <Stack.Navigator initialRouteName={AppScreenName.HOME}>
          <Stack.Screen name={AppScreenName.HOME} component={HomeScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName={AppScreenName.REGISTER}>
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen
              name={AppScreenName.REGISTER}
              component={RegisterScreen}
            />
          </Stack.Group>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
