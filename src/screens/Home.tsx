import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Loader from '../components/Loader';
import {retrieveUsers, selectUser, UserItem} from '../redux/feature/user/slice';
import {useAppDispatch, useAppSelector} from '../redux/hook';

export default function HomeScreen() {
  const {list, status} = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(retrieveUsers());
  }, [dispatch]);

  const renderItem = ({item}: {item: UserItem}) => (
    <View style={styles.rowStyle}>
      <Image source={{uri: item.avatar}} style={styles.imageStyle} />
      <Text style={styles.textStyle}>
        {item?.first_name + ' ' + item?.last_name}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {status === 'loading' ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={list}
            style={styles.listStyle}
            renderItem={renderItem}
            keyExtractor={(item: UserItem) => item.id.toString()}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowStyle: {
    padding: 10,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#C5C5C5',
    shadowRadius: 10,
    shadowOpacity: 1,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
  },
  imageStyle: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 20,
  },
  listStyle: {
    padding: 10,
  },
});
