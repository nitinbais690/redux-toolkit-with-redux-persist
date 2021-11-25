import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from 'react-native';

const Loader = ({
  size,
  ...props
}: Pick<ActivityIndicatorProps, 'color' | 'size'>) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator {...props} size={size ?? 'large'} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
