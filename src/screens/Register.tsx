import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import {registerUser, selectUser} from '../redux/feature/user/slice';
import {useAppDispatch, useAppSelector} from '../redux/hook';
import {useNavigation} from '@react-navigation/core';
import {AppScreenName, RootStackParamList} from '../navigation/route';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {status, success} = useAppSelector(selectUser);
  const navigation = useNavigation<RootStackParamList>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (success) {
      navigation.navigate(AppScreenName.HOME);
    }
  }, [navigation, success]);

  return (
    <View style={styles.container}>
      <View style={styles.formField}>
        <Text style={styles.headingTextStyle}>User Register</Text>
        <InputField
          style={styles.inputFieldStyle}
          value={email}
          placeholder={'Email'}
          onChangeText={(email: string) => setEmail(email)}
          keyboardType="email-address"
        />
        <InputField
          style={styles.inputFieldStyle}
          value={password}
          placeholder={'Password'}
          onChangeText={(password: string) => setPassword(password)}
          secureTextEntry
        />
        <Button
          onPress={() => dispatch(registerUser({email, password}))}
          title="Register"
          loading={status === 'loading'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  inputFieldStyle: {
    marginBottom: 20,
  },
  formField: {},
  headingTextStyle: {
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 30,
  },
});
