import { StyleSheet, Platform } from 'react-native';
import placeholders from '../base/placeholders';

const iconFunc = dimension => ({
  resizeMode: 'contain',
  height: dimension,
  width: dimension,
});

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginTop: Platform.OS === 'ios' ? 10 : 40,
  },
  headingText: {
    color: placeholders.almostBlack,
    fontSize: 36,
    marginBottom: 5,
  },
  text: {
    color: placeholders.darkGray,
    fontSize: 14,
  },
  inputBoxContainer: {
    backgroundColor: placeholders.lightGray,
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  inputBox: {
    height: 50,
    borderColor: placeholders.lightGray,
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: placeholders.blue,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    ...iconFunc(20),
  },
  buttonIcon: {
    ...iconFunc(25),
  },
  sectionDivider: {
    paddingBottom: 20,
    borderBottomColor: '#C8C8C8',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  smallText: {
    textAlign: 'center',
    color: placeholders.gray,
    padding: 5,
    marginHorizontal: 150,
    marginBottom: 10,
    position: 'relative',
    bottom: 15,
    backgroundColor: 'white',
  },
  linkText: {
    textAlign: 'center',
    fontSize: 16,
    color: placeholders.blue,
  },

});
