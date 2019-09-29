import { StyleSheet } from 'react-native';
import placeholders from '../base/placeholders';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginTop: 50,
  },
  headingText: {
    color: placeholders.almostBlack,
    fontSize: 36,
    marginBottom: 5,
  },
  text: {
    color: placeholders.darkGray,
    fontSize: 16,
  },
  inputBoxContainer: {
    backgroundColor: placeholders.lightGray,
    paddingHorizontal: 10,
    marginVertical: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  inputBox: {
    height: 50,
    borderColor: placeholders.lightGray,
    borderBottomWidth: 1,
  },
  button: {
    marginVertical: 15,
    backgroundColor: placeholders.blue,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
  },
  inputRow: {
    paddingBottom: 30,
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
