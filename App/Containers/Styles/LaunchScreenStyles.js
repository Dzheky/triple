import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    top: -35,
    left: -40,
    position: 'absolute',
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin * 2
  },
  loginButton: {
    margin: Metrics.baseMargin
  },
  unfocusedButtonText: {
    backgroundColor: Colors.transparent,
    paddingHorizontal: 5,
    color: Colors.grey,
    fontSize: Fonts.size.h6,
    fontWeight: '800',
    zIndex: 1
  },
  registrationUnderline: {
    height: 13,
    backgroundColor: 'white',
    marginTop: -15
  },
  focusedButtonText: {
    backgroundColor: Colors.transparent,
    color: 'black',
    paddingHorizontal: 5,
    fontSize: Fonts.size.h4,
    fontWeight: '800',
    zIndex: 1
  },
  registrationButton: {
    margin: Metrics.baseMargin
  },
  containerBackground: {
    backgroundColor: Colors.yellow
  },
  centered: {
    alignItems: 'center'
  }
})
