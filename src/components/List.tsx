import React from 'react';
import {FlatList, FlatListProps} from 'react-native';

export default function List<T>(props: Omit<FlatListProps<T>, 'keyExtractor'>) {
  return <FlatList<T> {...props} keyExtractor={(_t, i) => i.toString()} />;
}
