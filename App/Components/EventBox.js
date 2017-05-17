import React from 'react'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import normalStyles from './Styles/EventBoxStyle'
import favoriteStyles from './Styles/EventBoxFavoriteStyle'
import EventActions from '../Redux/EventsRedux'
import { connect } from 'react-redux'
import { Actions, ActionConst } from 'react-native-router-flux'
import { Colors, Metrics } from '../Themes/'
import Timer from './Timer'
import Icon from 'react-native-vector-icons/Ionicons'

class EventBox extends React.Component {

  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0
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

  renderTime = () => {
    let styles = normalStyles
    return (
      <View style={styles.timeContainer}>
        <Timer start={this.props.event.start} />
      </View>
    )
  }

  handleEventPress = () => {
    this.props.favoriteScreen ? Actions.FavoriteEventInfo({ event: this.props.event }) : Actions.EventInfo({ event: this.props.event })
  }

  render () {
    let event = this.props.event
    let styles = this.props.favoriteScreen ? favoriteStyles : normalStyles
    let uri = this.props.event.picture || 'https://specials-images.forbesimg.com/imageserve/563858686/960x0.jpg?fit=scale'
    return (
      <TouchableWithoutFeedback
        onPress={this.handleEventPress}
      >
        <View
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
            source={{ uri }}
          />
          <Text style={styles.boldLabel}>{event.title && event.title.split(' - ')[0]}</Text>
          <Text style={styles.underLabel}>США</Text>
          <View style={styles.greyLine} />
          <View style={styles.bottomContainer}>
            <Text style={styles.dates}>{this.props.date}</Text>
            <Text style={styles.price}>$100</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
