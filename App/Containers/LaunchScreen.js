import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Keyboard,
  Platform,
  Modal
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
    scrolling: false,
    keyboardUp: false,
    forgottenVisible: false
  }
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  _keyboardDidShow = () => {
    if (Platform.OS === 'android') {
      this.setState({
        keyboardUp: true
      })
    }
  }

  _keyboardDidHide = () => {
    if (Platform.OS === 'android') {
      this.setState({
        keyboardUp: false
      })
    }
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

  handleForgotenPress = () => {
    this.setState({
      forgottenVisible: true
    })
  }

  handleCloseForgotten = () => {
    this.setState({
      forgottenVisible: false
    })
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

  renderButtonForgotten = () => {
    return (
      <TouchableOpacity
        style={Styles.passwordResetContainer}
        onPress={this.handleForgotenPress}
      >
        <Text style={Styles.passwordResetText}>Забыли пароль?</Text>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View style={[Styles.mainContainer, Styles.containerBackground]}>
        <Modal
          animationType={'fade'}
          transparent={false}
          visible={this.state.forgottenVisible}
          onRequestClose={() => {
            this.setState({
              forgottenVisible: false
            })
          }}
        >
          <View style={[Styles.mainContainer, Styles.containerBackground]}>
            <View>
              <Text style={Styles.passwordResetTitle}>ЗАБЫЛИ ПАРОЛЬ?</Text>
              <WideInput placeholder={'e-mail'} onChangeText={this.onEmailChange} />
              <WideButton text={'ВОЙТИ'} onPress={() => {}} style={{marginTop: 10}} />
            </View>
            {!this.state.keyboardUp ? <TouchableOpacity
              style={Styles.passwordResetContainer}
              onPress={this.handleCloseForgotten}
            >
              <Text style={Styles.passwordResetText}>✕ О, Вспомнил!</Text>
            </TouchableOpacity> : null }
          </View>
        </Modal>
        {this.state.keyboardUp ? null : <Image source={Images.logo} style={Styles.logo} />}
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
        {!this.state.keyboardUp && this.state.current === 'login' ? this.renderButtonForgotten() : null}
      </View>
    )
  }
}
