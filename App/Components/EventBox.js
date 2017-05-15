import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/EventBoxStyle'
import EventActions from '../Redux/EventsRedux'
import { connect } from 'react-redux'
import { Colors, Metrics } from '../Themes/'
import Icon from 'react-native-vector-icons/Ionicons'

class EventBox extends React.Component {

  onLikePress = () => {
    if (this.props.like) {
      this.props.iDislike(this.props.idNumber, this.props.tokenId, this.props.userId)
    } else {
      this.props.iLike(this.props.idNumber, this.props.tokenId, this.props.userId)
    }
  }

  render () {
    let event = this.props.event
    return (
      <View style={styles.row}>
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
          source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/ed/78/cb/ed78cbf314edd1440f10465c8d4f219f.jpg'}}
        />
        <Text style={styles.boldLabel}>{event.title && event.title.split(' - ')[0]}</Text>
        <Text style={styles.underLabel}>США</Text>
        <View style={styles.greyLine} />
        <View style={styles.bottomContainer}>
          <Text style={styles.dates}>{this.props.date}</Text>
          <Text style={styles.price}>$100</Text>
        </View>
      </View>
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
    tokenId: state.events.tokenId,
    userId: state.events.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    iLike: (ids, tokenId, userId) => dispatch(EventActions.like(ids, tokenId, userId)),
    iDislike: (ids, tokenId, userId) => dispatch(EventActions.dislike(ids, tokenId, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventBox)
