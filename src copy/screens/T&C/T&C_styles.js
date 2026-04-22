import { StyleSheet } from 'react-native';
import fonts from '../../assests/fonts';
export const stylesTandC = StyleSheet.create({
  Text: {
    paddingLeft: 8,
  },
  TandC_Container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  TandC_Head: {
    marginVertical: 25,
  },
  TandC_HeadTxt: {
    fontFamily: fonts.LatoBold,
    fontSize: 16,
    textAlign: 'center',
    color: '#212121',
    textDecorationLine: 'underline',
  },
  TandC_Content: {
    fontFamily: fonts.LatoRegular,
    fontSize: 18,
    color: '#616161',
    letterSpacing: 0.05,
  },
  TandC_SubHead: {
    marginTop: 20,
  },
  TandC_SubHeadTxt: {
    fontFamily: fonts.LatoBold,
    fontSize: 16,
    color: '#212121',
  },
  TandC_TermContainer: {
    flexDirection: 'row',
  },
  TandC_TermTxt: {
    fontSize: 14,
    fontFamily: fonts.LatoRegular,
    paddingLeft: 8,
    flexWrap: 'wrap',
    maxWidth: '90%',
  },
});
