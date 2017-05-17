import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import normalStyles from './Styles/EventBoxStyle'
import favoriteStyles from './Styles/EventBoxFavoriteStyle'
import EventActions from '../Redux/EventsRedux'
import { connect } from 'react-redux'
import { Actions, ActionConst } from 'react-native-router-flux'
import { Colors, Metrics } from '../Themes/'
import Icon from 'react-native-vector-icons/Ionicons'

class Num extends React.Component {ß
  render () {
    let styles = normalStyles
    return (
      <View style={styles.numberContainer}>
        <View style={styles.numberMiddleLine} />
        <Text style={styles.number}>{this.props.number}</Text>
      </View>
    )
  }
}

class NumSet extends React.Component {

  renderNumbers = (number) => {
    let numberString = number
    if (numberString < 10) {
      numberString = '0' + numberString
    }
    numberString = numberString.toString()
    return numberString.split('').map((element, id) => {
      return (
        <Num number={element} key={'NumSet' + id}/>
      )
    })
  }

  render () {
    let styles = normalStyles
    return (
      <View style={styles.numberSetContainer}>
        <Text style={styles.numberSetTitle}>{this.props.title}</Text>
        <View style={styles.numberSet}>
          {this.renderNumbers(this.props.number)}
        </View>
      </View>
    )
  }
}

class EventBox extends React.Component {

  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.getDifference(this.props.event.start)
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentWillReceiveProps(newProps) {
    if (newProps !== this.props) {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.getDifference(this.props.event.start)
      }, 1000)
    }
  }

  onLikePress = () => {
    if (this.props.like) {
      this.props.iDislike(this.props.idNumber, this.props.tokenId, this.props.userId, this.props.token)
    } else {
      this.props.iLike(this.props.idNumber, this.props.tokenId, this.props.userId, this.props.token)
    }
  }

  handleOnLoad = () => {
    this.props.loaded && this.props.loaded(this.props.id)
  }

  getDifference = (start) => {
    let first = new Date(start)
    let second = new Date()
    let seconds = parseInt((first - second) / 1000 % 60)
    let minutes = parseInt((first - second) / 1000 / 60 % 60)
    let hours = parseInt((((first - second) / 1000 / 60 / 60) - 2) % 24)
    let days = parseInt((first - second) / 1000 / 60 / 60 / 24)
    if(seconds < 0) {
      clearInterval(this.interval)
      this.setState({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0
      })
    } else {
      this.setState({
        seconds,
        minutes,
        hours,
        days
      })
    }
  }

  renderTime = () => {
    let styles = normalStyles
    return (
      <View style={styles.timeContainer}>
        <NumSet number={this.state.days} title={'Дней'} />
        <Text style={styles.dots}>:</Text>
        <NumSet number={this.state.hours} title={'Часов'} />
        <Text style={styles.dots}>:</Text>
        <NumSet number={this.state.minutes} title={'Минут'} />
        <Text style={styles.dots}>:</Text>
        <NumSet number={this.state.seconds} title={'Секунд'} />
      </View>
    )
  }

  handleEventPress = () => {
    this.props.favoriteScreen ? Actions.FavoriteEventInfo({ event: this.props.event }) : Actions.EventInfo({ event: this.props.event })
  }

  render () {
    let event = this.props.event
    let styles = this.props.favoriteScreen ? favoriteStyles : normalStyles
    return (
      <TouchableOpacity
        onPress={this.handleEventPress}
        style={styles.row}
      >
        {this.props.favoriteScreen && this.renderTime()}
        <TouchableOpacity
          style={[styles.likeContainer, { backgroundColor: this.props.like ? Colors.yellow : Colors.lightGrey }]}
          onPress={this.onLikePress}
        >
          <Icon name='md-heart-outline'
            size={Metrics.icons.medium}
            color='black'
            style={styles.likeIcon}
          />
        </TouchableOpacity>
        <Image
          style={styles.image}
          resizeMode={'cover'}
          onLoadEnd={this.handleOnLoad}
          source={{uri: 'https://specials-images.forbesimg.com/imageserve/563858686/960x0.jpg?fit=scale'}}
        />
        <Text style={styles.boldLabel}>{event.title && event.title.split(' - ')[0]}</Text>
        <Text style={styles.underLabel}>США</Text>
        <View style={styles.greyLine} />
        <View style={styles.bottomContainer}>
          <Text style={styles.dates}>{this.props.date}</Text>
          <Text style={styles.price}>$100</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

// Prop type warnings
EventBox.propTypes = {
  date: React.PropTypes.string.isRequired,
  event: React.PropTypes.object.isRequired
}
//
// // Defaults for props
// EventBox.defaultProps = {
//   someSetting: false
// }

const mapStateToProps = (state) => {
  return {
    tokenId: state.login.tokenId,
    userId: state.login.userId,
    token: state.login.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    iLike: (ids, tokenId, userId, token) => dispatch(EventActions.like(ids, tokenId, userId, token)),
    iDislike: (ids, tokenId, userId, token) => dispatch(EventActions.dislike(ids, tokenId, userId, token)),
    fetchingDone: () => dispatch(EventActions.fetchingDone())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventBox)
