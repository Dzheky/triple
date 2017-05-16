import React from 'react'
import { View, ListView, StatusBar, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Metrics } from '../Themes/'
import EventBox from '../Components/EventBox'
import EventsActions from '../Redux/EventsRedux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// Styles
import styles from './Styles/EventsScreenStyles'

class EventsScreen extends React.Component {

  constructor (props) {
    super(props)
    /* ***********************************************************
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(props.events || []),
      loaded: [],
      timer: false
    }
  }

  imageLoaded = (id) => {
    let arr = this.state.loaded
    if(arr.includes(0) && arr.includes(1) && arr.includes(2) && this.props.fetching) {
      this.props.fetchingDone()
    } else if(this.props.fetching) {
      this.setState({
        loaded: [...this.state.loaded, id]
      })
    }
    if(!this.state.timer) {
      this.setState({
        timer: true
      })
      setTimeout(() => {
        this.props.fetchingDone()
      }, 4000)
    }
  }

  componentDidMount () {
    this.props.getEvents()
  }
  /* ***********************************************************
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (event) {
    let date = this.formatDate(event)
    let id = this.props.events ? this.props.events.indexOf(event) : event.id
    return (
      <EventBox date={date} loaded={this.imageLoaded} event={event} like={event.like} idNumber={event.id} id={id} />
    )
  }

  formatDate = (event) => {
    let getMonth = (month) => {
      switch (month) {
        case '01':
          return 'Января'
        case '02':
          return 'Февраля'
        case '03':
          return 'Марта'
        case '04':
          return 'Апреля'
        case '05':
          return 'Мая'
        case '06':
          return 'Июня'
        case '07':
          return 'Июля'
        case '08':
          return 'Августа'
        case '09':
          return 'Сентября'
        case '10':
          return 'Октября'
        case '11':
          return 'Ноября'
        default:
          return 'Декабря'
      }
    }
    if (event.start && event.end) {
      let month1 = getMonth(event.start.split('-')[1])
      let month2 = getMonth(event.end.split('-')[1])
      let day1 = parseInt(event.start.split('-')[2])
      let day2 = parseInt(event.end.split('-')[2])
      let year1 = event.start.split('-')[0]
      let year2 = event.end.split('-')[0]
      if (month1 === month2 && year1 === year2) {
        return `${day1} - ${day2} ${month1} ${year1}`
      } else if (year1 === year2) {
        return `${day1} ${month1} - ${day2} ${month2} ${year1}`
      } else {
        return `${day1} ${month1} ${year1} - ${day2} ${month2} ${year2}`
      }
    } else {
      return ''
    }
  }
  /* ***********************************************************
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
  *************************************************************/
  componentWillReceiveProps (newProps) {
    if (newProps.events) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.results || newProps.events)
      })
    }
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  renderActivity = () => {
    if (this.props.fetching) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size={'large'} color={Colors.grey} animating={this.props.fetching} />
        </View>
      )
    } else if (this.noRowData()) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <View style={styles.iconCover}>
            <Icon name='emoticon-sad' size={Metrics.icons.medium} style={styles.searchIcon} />
            <Text style={styles.iconText}>Нема!</Text>
          </View>
        </View>
      )
    } else {
      return null
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.yellow}
          barStyle='dark-content'
          translucent
        />
        {this.renderActivity()}
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          pageSize={5}
          initialListSize={3}
          enableEmptySections
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.search.searchTerm,
    events: state.events.events,
    fetching: state.events.fetching,
    results: state.search.results,
    likes: state.events.favorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: () => dispatch(EventsActions.eventsRequest()),
    fetchingDone: () => dispatch(EventsActions.fetchingDone())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen)
