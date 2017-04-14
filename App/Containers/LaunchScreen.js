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
import Swiper from 'react-native-swiper'

// Styles
import Styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  state = {
    eMail: 'Hello world',
    current: 'login',
    scrolling: false
  }

  onEmailChange = (text) => {
    this.setState({
      eMail: text
    })
  }

  setScrolling = () => {
    this.setState({
      scrolling: true
    })
    setTimeout(() => {
      this.setState({
        scrolling: false
      })
    }, 500)
  }

  handleLoginPress = () => {
    if (this.state.current === 'registration' && !this.state.scrolling) {
      this.setScrolling()
      this.swiper.scrollBy(-1, true)
      this.setState({
        current: 'login'
      })
    }
  }

  handleRegistrationPress = () => {
    if (this.state.current === 'login' && !this.state.scrolling) {
      this.setScrolling()
      this.swiper.scrollBy(1, true)
      this.setState({
        current: 'registration'
      })
    }
  }

  handleSwipe = (e, state) => {
    let current
    switch (state.index) {
      case 0:
        current = 'login'
        break
      case 1:
        current = 'registration'
        break
      default:
        current = 'login'
    }
    this.setState({
      current
    })
  }

  renderLine (state) {
    if (state) {
      return (
        <View style={Styles.registrationUnderline} />
      )
    } else {
      return (
        <View style={{ backgroundColor: 'transparent' }} />
      )
    }
  }

  render () {
    return (
      <View style={[Styles.mainContainer, Styles.containerBackground]}>
        <Image source={Images.logo} style={Styles.logo} />
        <View style={Styles.section} >
          <View style={Styles.topButtonsContainer}>
            <TouchableOpacity
              style={Styles.loginButton}
              onPress={this.handleLoginPress}
            >
              <Text style={this.state.current === 'login' ? Styles.focusedButtonText : Styles.unfocusedButtonText}>ВХОД</Text>
              {this.renderLine(this.state.current === 'login')}
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.registrationButton}
              onPress={this.handleRegistrationPress}
            >
              <Text style={this.state.current === 'registration' ? Styles.focusedButtonText : Styles.unfocusedButtonText}>РЕГИСТРАЦИЯ</Text>
              {this.renderLine(this.state.current === 'registration')}
            </TouchableOpacity>
          </View>
          <View>
            <Swiper
              ref={(ref) => { this.swiper = ref }}
              style={Styles.swiper}
              showButtons={false}
              showsPagination={false}
              loop={false}
              height={250}
              autoplay={false}
              onMomentumScrollEnd={this.handleSwipe}
            >
              <View>
                <WideInput placeholder={'e-mail'} onChangeText={this.onEmailChange} />
                <WideInput placeholder={'пароль'} onChangeText={this.onEmailChange} password />
                <WideButton text={'ВОЙТИ'} onPress={() => {}} style={{marginTop: 10}} />
                <WideButton text={'Войти через Facebook'} onPress={() => {}} transparent />
              </View>
              <View>
                <WideInput placeholder={'e-mail'} onChangeText={this.onEmailChange} />
                <WideInput placeholder={'пароль'} onChangeText={this.onEmailChange} password />
                <WideButton text={'ЗАРЕГИСТРИРОВАТЬСЯ'} onPress={() => {}} style={{marginTop: 10}} />
                <WideButton text={'Зарегистрироваться через Facebook'} onPress={() => {}} transparent />
              </View>
            </Swiper>
          </View>
        </View>
      </View>
    )
  }
}
