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
import TopError from '../Components/TopError'
import Swiper from 'react-native-swiper'
import key from '../../apiKeys'

// Styles
import Styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  state = {
    eMail: '',
    forgottenEmail: '',
    password: '',
    current: 'login',
    scrolling: false,
    keyboardUp: false,
    forgottenVisible: false,
    loginWaiting: false,
    registrationWaiting: false,
    resetPasswordWaiting: false
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

  login = async () => {
    try {
      const url = 'https://dzheky.eu.auth0.com/oauth/ro'
      let data = {
        client_id: key.auth0clientId,
        username: this.state.eMail,
        password: this.state.password,
        connection: 'Triple',
        grant_type: 'password'
      }
      let fetchData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      let response = await fetch(url, fetchData)
      response = await response.json()
      this.setState({
        loginWaiting: false
      }, () => {
        if (response.access_token) {
          this.error.showError('Вы вошли как ' + this.state.eMail + '!')
        } else if (response.error_description === 'Wrong email or password.') {
          this.error.showError('Неправильный email или пароль!')
        } else {
          this.error.showError('Что-то пошло не так')
        }
      })
    } catch (error) {
      this.setState({
        loginWaiting: false
      }, () => {
        this.error.showError('Что-то пошло не так')
      })
    }
  }

  handleResetPassword = () => {
    Keyboard.dismiss()
    this.resetPassword()
    this.setState({
      resetPasswordWaiting: true
    })
  }

  resetPassword = async () => {
    try {
      const url = 'https://dzheky.eu.auth0.com/dbconnections/change_password'
      let data = {
        client_id: key.auth0clientId,
        email: this.state.forgottenEmail,
        connection: 'Triple'
      }
      let fetchData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      let response = await fetch(url, fetchData)
      response = await response.json()
      this.setState({
        resetPasswordWaiting: false
      }, () => {
        if (response === "We've just sent you an email to reset your password.") {
          this.modalError.showError('Мы отправили вам email для восстановления пароля!')
        } else if (response.error === 'email or username are required.') {
          this.modalError.showError('Введите ваш email!')
        } else {
          this.modalError.showError('Что-то пошло не так')
        }
      })
    } catch (error) {
      this.setState({
        resetPasswordWaiting: false
      }, () => {
        this.error.showError('Что-то пошло не так')
      })
    }
  }

  registration = async () => {
    try {
      const url = 'https://dzheky.eu.auth0.com/dbconnections/signup'
      let data = {
        client_id: key.auth0clientId,
        email: this.state.eMail,
        password: this.state.password,
        connection: 'Triple'
      }
      let fetchData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      let response = await fetch(url, fetchData)
      response = await response.json()
      this.setState({
        registrationWaiting: false
      }, () => {
        if (response._id) {
          this.login()
        } else if (response.description === 'The user already exists.') {
          this.error.showError('Пользователь с таким email уже существует!')
        } else {
          this.error.showError('Что-то пошло не так')
        }
      })
    } catch (error) {
      this.setState({
        registrationWaiting: false
      }, () => {
        this.error.showError('Что-то пошло не так')
      })
    }
  }

  onEmailChange = (text) => {
    this.setState({
      eMail: text
    })
  }

  onForgotEmailChange = (text) => {
    this.setState({
      forgottenEmail: text
    })
  }

  onPasswordChange = (text) => {
    this.setState({
      password: text
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

  handleLogin = () => {
    Keyboard.dismiss()
    this.login()
    this.setState({
      loginWaiting: true
    })
  }

  handleLoginPress = () => {
    if (this.state.current === 'registration' && !this.state.scrolling) {
      this.setScrolling()
      this.swiper.scrollBy(-1, true)
      this.setState({
        current: 'login',
        eMail: '',
        password: ''
      })
    }
  }

  handleRegistration = () => {
    Keyboard.dismiss()
    this.registration()
    this.setState({
      registrationWaiting: true
    })
  }

  handleRegistrationPress = () => {
    if (this.state.current === 'login' && !this.state.scrolling) {
      this.setScrolling()
      this.swiper.scrollBy(1, true)
      this.setState({
        current: 'registration',
        eMail: '',
        password: ''
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
            <TopError ref={ref => { this.modalError = ref }} />
            <View>
              <Text style={Styles.passwordResetTitle}>ЗАБЫЛИ ПАРОЛЬ?</Text>
              <WideInput placeholder={'e-mail'} onChangeText={this.onForgotEmailChange} />
              <WideButton waiting={this.state.resetPasswordWaiting} text={'ВСПОМНИТЬ'} onPress={this.handleResetPassword} style={{marginTop: 10}} />
            </View>
            {!this.state.keyboardUp ? <TouchableOpacity
              style={Styles.passwordResetContainer}
              onPress={this.handleCloseForgotten}
            >
              <Text style={Styles.passwordResetText}>✕ О, Вспомнил!</Text>
            </TouchableOpacity> : null }
          </View>
        </Modal>
        <Image source={Images.logo} style={[Styles.logo, { opacity: this.state.keyboardUp ? 0 : 1 }]} />
        <TopError ref={ref => { this.error = ref }} />
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
                <WideInput placeholder={'пароль'} onChangeText={this.onPasswordChange} password />
                <WideButton waiting={this.state.loginWaiting} text={'ВОЙТИ'} onPress={this.handleLogin} style={{marginTop: 10}} />
                <WideButton text={'Войти через Facebook'} onPress={() => {}} transparent />
              </View>
              <View>
                <WideInput placeholder={'e-mail'} onChangeText={this.onEmailChange} />
                <WideInput placeholder={'пароль'} onChangeText={this.onPasswordChange} password />
                <WideButton waiting={this.state.registrationWaiting} text={'ЗАРЕГИСТРИРОВАТЬСЯ'} onPress={this.handleRegistration} style={{marginTop: 10}} />
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
