import colors from '../../../assests/colors';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  ImageHeaderAndGridImage: {
    width: '75%',
    aspectRatio: 120 / 151,
  },
  ImageHeaderAndGridText: {
    marginHorizontal: 48,
    fontSize: 13,
    letterSpacing: 0.2,
  },
  ImageHeaderAndGridContainer: {
    marginTop: 20,
  },
  ImageHeaderAndGridImgGrid: {
    width: '47%',
    marginBottom: 20,
  },
  ImageHeaderAndGridBestsellerText: {
    fontFamily: 'EBGaramond-Italic',
    marginHorizontal: 24,
    letterSpacing: 0,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '25%',
  },
  ImageAndDescriptionComponentText: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  ImageAndDescriptionComponentDecodeText: {
    fontSize: 12,
    marginTop: 10,
  },
  ImageAndDescriptionComponentButton: {
    marginTop: 10,
  },
  componentContainer: {
    aspectRatio: 32 / 49,
    backgroundColor: colors.whiteColor1,
  },
  componentBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  componentTxt: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'EBGaramond-Regular',
    color: '#383938',
  },
  componentButton: {
    borderWidth: 1,
    borderColor: '#707070',
    paddingHorizontal: 25,
    paddingVertical: 2.5,
  },
  componentButtonTxt: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    color: '#383938',
  },
  bestSellerContainer: {
    paddingVertical: 50,
    backgroundColor: colors.creamColor1,
  },
  bestSellerTxt: {
    fontSize: 12,
    fontFamily: 'EBGaramond-Regular',
    color: '#383938',
    marginHorizontal: 10,
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  bestSellerGridContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bestSellerGridImage: {
    width: '100%',
    aspectRatio: 138 / 173,
  },
  bgTopImage: {
    position: 'absolute',
    width: '100%',
    top: 0,
    right: 40,
    height: 300,
    zIndex: 2,
  },
  Text: {
    marginBottom: 20,
  },
  ImageData: {
    width: '47%',
    marginBottom: 20,
  },
  finalDescription: {
    width: '85%',
    fontSize: 12,
  },
  Image: {
    width: '75%',
    marginBottom: 10,
  },
});
