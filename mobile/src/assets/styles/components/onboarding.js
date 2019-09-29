import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  link: {
    width: 'inherit',
  },
  dotContainer: {
    flexDirection: 'row',
  },
  dot: {
    backgroundColor: 'white',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 10,
    marginTop: 6,
    marginBottom: 3,
  },
  slide: {
    flex: 1,
  },
  headingText: {
    color: 'white',
    fontSize: 36,
    marginBottom: 15,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  textBox: {
    flex: 1,
    flexDirection: 'column-reverse',
    width: '100%',
    marginBottom: 70,
    paddingHorizontal: 20,
  },
  right: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
  },
});
