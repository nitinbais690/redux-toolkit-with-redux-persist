import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import List from '../../components/List';
import {peopleActions, peopleSelector} from '../../redux/slices/people';
import styles from './styles';
import {PeopleItemListType} from './types';

export default function People() {
  const dispatch = useDispatch();
  const {list: peopleList, loading, page} = useSelector(peopleSelector);

  const renderItem = useCallback(({item}: {item: PeopleItemListType}) => {
    return (
      <View style={styles.rowListStyle}>
        <Text style={styles.titleTextStyle}>{item.name}</Text>
        <Text style={styles.subtitleTextStyle}>{item.gender}</Text>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <List<PeopleItemListType>
        ListEmptyComponent={() => (
          <Button
            loading={loading}
            title="fetch people"
            onPress={() => dispatch(peopleActions.getTask(page))}
          />
        )}
        data={peopleList}
        ListFooterComponent={
          peopleList.length > 0
            ? () => (
                <Button
                  loading={loading}
                  title="fetch more people..."
                  onPress={() => dispatch(peopleActions.getTask(page + 1))}
                />
              )
            : undefined
        }
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
