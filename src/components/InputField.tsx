import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';

const InputField = ({
  style,
  ...props
}: Omit<TextInputProps, 'placeholderTextColor'>) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        {...props}
        style={styles.inputStyle}
        placeholderTextColor={'#C5C5C5'}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15
  },
  inputStyle: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
});
