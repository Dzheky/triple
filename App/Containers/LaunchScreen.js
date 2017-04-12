import React from 'react'
import {
  View
} from 'react-native'
import WideInput from '../Components/WideInput'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  state = {
    eMail: 'Hello world'
  }

  componentDidMount () {
  }
  onEmailChange = (text) => {
    this.setState({
      eMail: text
    })
  }
  render () {
    return (
      <View style={[styles.mainContainer, styles.containerBackground]}>
        <View style={styles.section} >
          <WideInput placeholder={'e-mail'} onChangeText={this.onEmailChange} />
          <WideInput placeholder={'пароль'} onChangeText={this.onEmailChange} />
        </View>
      </View>
    )
  }
}
