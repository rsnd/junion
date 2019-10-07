import { StyleSheet } from 'react-native';
import placeholders from './placeholders';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  fullSize: {
    width: '100%',
    height: '100%',
  },
  fullButton: {
    backgroundColor: placeholders.blue,
    paddingHorizontal: 15,
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 10,
  },
  fullStrokeButton: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: placeholders.red,
    borderRadius: 5,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    width: '100%',
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 10,
  },
  borderBottomOrange: {
    borderBottomWidth: 1,
    borderBottomColor: placeholders.orange,
  },
  blue: {
    color: placeholders.blue,
  },
  white: {
    color: placeholders.white,
  },
  gray: {
    color: placeholders.gray,
  },
  red: {
    color: placeholders.red,
  },
  green: {
    color: placeholders.green,
  },
  orange: {
    color: placeholders.orange,
  },
  textSmall: {
    fontSize: 12,
  },
  textRight: {
    textAlign: 'right',
  },
  p_xs: {
    padding: 5,
  },
  p_sm: {
    padding: 10,
  },
  p_h_xs: {
    paddingHorizontal: 5,
  },
  p_h_sm: {
    paddingHorizontal: 10,
  },
  p_h_md: {
    paddingHorizontal: 20,
  },
  p_v_xs: {
    paddingVertical: 5,
  },
  p_v_sm: {
    paddingVertical: 10,
  },
  p_v_md: {
    paddingVertical: 20,
  },
  p_t_xxs: {
    paddingTop: 3,
  },
  p_t_sm: {
    paddingTop: 10,
  },
  p_t_md: {
    paddingTop: 20,
  },
  p_r_xs: {
    paddingRight: 5,
  },
  p_b_sm: {
    paddingBottom: 10,
  },
  p_b_md: {
    paddingBottom: 20,
  },
  p_l_xs: {
    paddingLeft: 5,
  },
  p_l_sm: {
    paddingLeft: 10,
  },
  p_l_md: {
    paddingLeft: 20,
  },
  m_r_xxs: {
    marginRight: 3,
  },
  m_r_xs: {
    marginRight: 5,
  },
  m_r_sm: {
    marginRight: 10,
  },
  m_r_md: {
    marginRight: 20,
  },
  m_r_lg: {
    marginRight: 40,
  },
  m_t_lg: {
    marginTop: 40,
  },
  m_t_md: {
    marginTop: 20,
  },
  m_t_sm: {
    marginTop: 10,
  },
  m_b_xs: {
    marginBottom: 5,
  },
  m_b_sm: {
    marginBottom: 10,
  },
  m_b_md: {
    marginBottom: 20,
  },
  m_b_lg: {
    marginBottom: 40,
  },
  m_h_xs: {
    marginHorizontal: 5,
  },
  m_h_sm: {
    marginHorizontal: 10,
  },
  m_h_md: {
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
  },
  col_12: {
    flex: 12,
  },
  col_11: {
    flex: 11,
  },
  col_10: {
    flex: 10,
  },
  col_9: {
    flex: 9,
  },
  col_8: {
    flex: 8,
  },
  col_7: {
    flex: 7,
  },
  col_6: {
    flex: 6,
  },
  col_5: {
    flex: 5,
  },
  col_4: {
    flex: 4,
  },
  col_3: {
    flex: 3,
  },
  col_2: {
    flex: 2,
  },
  col_1: {
    flex: 1,
  },
});
