import { StyleSheet, Platform } from 'react-native';
import placeholders from '../base/placeholders';

const imageStyles = (resizeMode, height, width) => ({
  resizeMode,
  height,
  width,
});

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: Platform.OS === 'ios' ? 10 : 40,
  },
  linkContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#C8C8C8',
  },
  link: {
    paddingBottom: 10,
  },
  activeLink: {
    borderBottomWidth: 1,
    borderBottomColor: placeholders.blue,
  },
  linkText: {
    textAlign: 'center',
    fontSize: 16,
    color: placeholders.darkGray,
  },
  activeLinkText: {
    color: placeholders.blue,
  },
  messageBoxContainer: {
    backgroundColor: placeholders.lightGreen,
    marginBottom: 15,
    borderRadius: 5,
  },
  messageBox: {
    padding: 10,
    backgroundColor: placeholders.lightGreen,
    borderRadius: 5,
  },
  messageText: {
    fontSize: 14,
    color: placeholders.almostBlack,
  },
  icon: {
    ...imageStyles('contain', 15, 15),
  },
  inputBoxContainer: {
    width: '100%',
  },
  bottom: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    bottom: 10,
    paddingTop: 10,
  },
  bottomButton: {
    width: '100%',
    backgroundColor: placeholders.blue,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
  },
  bottomButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  detailsBox: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  detailsBoxGreen: {
    backgroundColor: placeholders.lightGreen,
  },
  smallTitle: {
    color: placeholders.blue,
    fontSize: 12,
  },
  actionsWrapper: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: placeholders.gray,
    borderBottomColor: placeholders.gray,
  },
  actionContainer: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: placeholders.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pollImage: {
    ...imageStyles('cover', 150, '100%'),
    marginBottom: 15,
  },
  pollTextContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 5,
  },
});
