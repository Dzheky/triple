import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native'
import { Images } from '../Themes'
import WideInput from '../Components/WideInput'
import WideButton from '../Components/WideButton'

// Styles
import Styles from './Styles/LaunchScreenStyles'

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
      <View style={[Styles.mainContainer, Styles.containerBackground]}>
        <Image source={Images.logo} style={Styles.logo} />
        <View style={Styles.section} >
          <View style={Styles.topButtonsContainer}>
            <TouchableOpacity style={Styles.loginButton}>
              <Text style={Styles.loginText}>ВХОД</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.registrationButton}>
              <Text style={Styles.registrationText}>РЕГИСТРАЦИЯ</Text>
              <View style={Styles.registrationUnderline}></View>
            </TouchableOpacity>
          </View>
          <WideInput placeholder={'e-mail'} onChangeText={this.onEmailChange} />
          <WideInput placeholder={'пароль'} onChangeText={this.onEmailChange} password={true} />
          <WideButton text={'ЗАРЕГИСТРИРОВАТЬСЯ'} onPress={() => {}} style={{marginTop: 10}} />
          <WideButton text={'Зарегистрироваться через Facebook'} onPress={() => {}} transparent />
        </View>
      </View>
    )
  }
}
