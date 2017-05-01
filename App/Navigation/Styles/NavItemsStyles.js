import {StyleSheet} from 'react-native'
import { Colors } from '../../Themes/'

const navButton = {
  backgroundColor: Colors.transparent,
  justifyContent: 'center',
  color: Colors.grey
}

export default StyleSheet.create({
  backButton: {
    ...navButton
  },
  navButtonLeft: {
    ...navButton
  },
  searchButton: {
    ...navButton
  }
})
