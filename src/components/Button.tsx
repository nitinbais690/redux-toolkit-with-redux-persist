import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';
import Loader from './Loader';

type ButtonProps = {
  titleTextStyle?: TextStyle;
  title: string;
  loading?: boolean;
} & PressableProps;

const Button = ({titleTextStyle, loading, title, ...props}: ButtonProps) => {
  return (
    <Pressable disabled={loading} {...props} style={[styles.buttonStyle]}>
      {loading ? (
        <Loader />
      ) : (
        <Text style={[styles.textStyle, titleTextStyle]}>{title}</Text>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCCCCC',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
