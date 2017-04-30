import React from 'react'
import { View, Text, ListView, Image } from 'react-native'
import { connect } from 'react-redux'
// For empty lists
import AlertMessage from '../Components/AlertMessage'
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
      dataSource: ds.cloneWithRows(props.results)
    }
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
    return (
      <View style={styles.row}>
        <Image
          style={styles.image}
          resizeMode={'cover'}
          source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/ed/78/cb/ed78cbf314edd1440f10465c8d4f219f.jpg'}}
        />
        <Text style={styles.boldLabel}>{event.title.split(' - ')[0]}</Text>
        <Text style={styles.underLabel}>США</Text>
        <View style={styles.greyLine} />
        <View style={styles.bottomContainer}>
          <Text style={styles.dates}>{date}</Text>
          <Text style={styles.price}>$100</Text>
        </View>
      </View>
    )
  }

  formatDate = (event) => {
    let getMonth = (month) => {
      switch(month) {
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
    let month1 = getMonth(event.start.split('-')[1])
    let month2 = getMonth(event.end.split('-')[1])
    let day1 = parseInt(event.start.split('-')[2])
    let day2 = parseInt(event.end.split('-')[2])
    let year1 = event.start.split('-')[0]
    let year2 = event.end.split('-')[0]
    if(month1 == month2 && year1 == year2) {
      return `${day1} - ${day2} ${month1} ${year1}`
    } else if(year1 === year2) {
      return `${day1} ${month1} - ${day2} ${month2} ${year1}`
    } else {
      return `${day1} ${month1} ${year1} - ${day2} ${month2} ${year2}`
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
    if (newProps.results) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.results)
      })
    }
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this.noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          pageSize={15}
          enableEmptySections
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.search.searchTerm,
    results: state.search.results
  }
}

export default connect(mapStateToProps)(EventsScreen)
