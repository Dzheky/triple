'use strict'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, Text, Animated, Easing } from 'react-native'
import Styles from './Styles/TopErrorStyles'
import ErrorMessagesActions from '../Redux/ErrorMessagesRedux'
import { Metrics } from '../Themes/'

class TopError extends React.Component {
  state = {
    top: new Animated.Value(-Metrics.buttonHeight),
  }

  static propTypes = {
    onPress: PropTypes.func
  }

  componentWillReceiveProps(newProps) {
    if(this.props.showErrorMessage === false && newProps.showErrorMessage === true) {
      this.showError()
      setTimeout(() => {
        this.props.hide()
      }, 2000)
    } else if (this.props.showErrorMessage === true && newProps.showErrorMessage == false) {
      this.hideError()
    }
  }

  hideError = () => {
    Animated.timing(this.state.top, {
      toValue: -Metrics.buttonHeight,
      easing: Easing.elastic(2)
    }).start()
  }

  showError = () => {
    Animated.timing(this.state.top, {
      toValue: 0,
      easing: Easing.elastic(2)
    }).start()
  }

  render () {
    return (
      <Animated.View style={[Styles.container, { top: this.state.top }]}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={Styles.text}>{this.props.errorMessage}</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.log.errorMessage,
    showErrorMessage: state.log.showErrorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hide: () => dispatch(ErrorMessagesActions.hideMessage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopError)
