const colors = {
  background: '#fefdf8',
  yellow: '#fbd100',
  grey: '#adadad',
  lightGrey: '#f1f1f1',
  clear: 'rgba(0,0,0,0)',
  facebook: '#3b5998',
  transparent: 'rgba(0,0,0,0)',
  silver: '#F7F7F7',
  steel: '#CCCCCC',
  error: 'rgba(200, 0, 0, 0.8)',
  ricePaper: 'rgba(255,255,255, 0.75)',
  frost: '#D8D8D8',
  cloud: 'rgba(200,200,200, 0.35)',
  windowTint: 'rgba(0, 0, 0, 0.4)',
  panther: '#161616',
  charcoal: '#595959',
  coal: '#2d2d2d',
  bloodOrange: '#fb5f26',
  snow: 'white',
  ember: 'rgba(164, 0, 48, 0.5)',
  fire: '#e73536',
  drawer: 'rgba(30, 30, 29, 0.95)',
  eggplant: '#251a34',
  border: '#483F53',
  banner: '#5F3E63',
  text: '#E0D7E5',
  getMonth: (month) => {
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
}

export default colors
