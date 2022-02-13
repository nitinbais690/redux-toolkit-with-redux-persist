import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  rowListStyle: {
    backgroundColor: '#ffffff',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    shadowRadius: 5,
    shadowOpacity: 0.8,
    marginHorizontal: 10,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowColor: '#999999',
  },
  titleTextStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  subtitleTextStyle: {
    fontSize: 12,
    color: 'gray',
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
});
