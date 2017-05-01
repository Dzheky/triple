import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  row: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    justifyContent: 'center'
  },
  likeContainer: {
    position: 'absolute',
    top: 130,
    right: Metrics.baseMargin,
    zIndex: 100,
    height: 40,
    width: 40,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  likeIcon: {
    backgroundColor: Colors.transparent,
    height: 27
  },
  boldLabel: {
    ...Fonts.style.h5,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: 'black',
    textAlign: 'left',
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin
  },
  underLabel: {
    color: Colors.grey,
    fontSize: Fonts.size.small,
    marginHorizontal: Metrics.baseMargin
  },
  greyLine: {
    height: 1,
    backgroundColor: Colors.grey,
    opacity: 0.2,
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.smallMargin
  },
  bottomContainer: {
    marginHorizontal: Metrics.baseMargin,
    marginBottom: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dates: {
    fontSize: Fonts.size.small,
    color: 'black'
  },
  price: {
    fontSize: Fonts.size.small,
    color: 'black'
  },
  image: {
    width: Metrics.screenWidth - Metrics.baseMargin * 2,
    height: 150
  }
})
