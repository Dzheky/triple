import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Keyboard,
  Platform,
  Modal,
  StatusBar
} from 'react-native'
import { Images, Colors } from '../Themes'
import WideInput from '../Components/WideInput'
import WideButton from '../Components/WideButton'
import { connect } from 'react-redux'
import LoginActions from '../Redux/LoginRedux'
import TopError from '../Components/TopError'
import Swiper from 'react-native-swiper'

// Styles
import Styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends React.Component {
  state = {
    eMail: 'test@test.ru',
    forgottenEmail: '',
    password: 'test',
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

  login = () => {
    this.props.attemptLogin(this.state.eMail, this.state.password)
  }

  handleResetPassword = () => {
    Keyboard.dismiss()
    this.resetPassword()
    this.setState({
      resetPasswordWaiting: true
    })
  }

  resetPassword = () => {
    this.props.ressetPassword(this.state.forgottenEmail)
  }

  registration = () => {
    this.props.attemptRegister(this.state.eMail, this.state.password)
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
        <StatusBar
          backgroundColor={Colors.yellow}
          barStyle='dark-content'
        />
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
          <TopError />
          <View style={[Styles.mainContainer, Styles.containerBackground]}>
            <View>
              <Text style={Styles.passwordResetTitle}>ЗАБЫЛИ ПАРОЛЬ?</Text>
              <WideInput placeholder={'e-mail'} onChangeText={this.onForgotEmailChange} />
              <WideButton waiting={this.props.fetching} text={'ВСПОМНИТЬ'} onPress={this.handleResetPassword} style={{marginTop: 10}} />
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
                <WideButton waiting={this.props.fetching} text={'ВОЙТИ'} onPress={this.handleLogin} style={{marginTop: 10}} />
                <WideButton text={'Войти через Facebook'} onPress={() => {}} transparent />
              </View>
              <View>
                <WideInput placeholder={'e-mail'} onChangeText={this.onEmailChange} />
                <WideInput placeholder={'пароль'} onChangeText={this.onPasswordChange} password />
                <WideButton waiting={this.props.fetching} text={'ЗАРЕГИСТРИРОВАТЬСЯ'} onPress={this.handleRegistration} style={{marginTop: 10}} />
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

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching,
    error: state.login.error,
    token: state.login.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
    attemptRegister: (email, password) => dispatch(LoginActions.registerRequest(email, password)),
    ressetPassword: (email) => dispatch(LoginActions.passwordResetRequest(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
