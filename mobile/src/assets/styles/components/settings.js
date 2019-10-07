import { StyleSheet } from 'react-native';
import placeholders from '../base/placeholders';

export default StyleSheet.create({
  linkContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: placeholders.gray,
    alignItems: 'center',
    paddingVertical: 20,
    // backgroundColor: placeholders.lightGray,
  },
  icon: {
    resizeMode: 'contain',
    height: 15,
    width: 15,
  },
  icon2: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
  },
});
