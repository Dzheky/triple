import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const LIST_DATA = [{
  title: 'SwingDiego (The Superbowl of Swing) - Registry Event',
  start: '2017-05-04',
  end: '2017-05-08',
  url: 'http://www.swingdiego.com/'
}, {
  title: 'Swingin - Registry Event',
  start: '2017-05-04',
  end: '2017-05-08',
  url: 'http://www.sis.djkenm.com'
}, {
  title: 'Scotland Swing Classic - Registry Event',
  start: '2017-05-05',
  end: '2017-05-08',
  url: 'http://scotlandswingclassic.com'
}, {
  title: 'KIWI Fest - Registry Event',
  start: '2017-05-05',
  end: '2017-05-08',
  url: 'http://'
}, {
  title: 'The Texas Classic - Registry Event',
  start: '2017-05-18',
  end: '2017-05-22',
  url: 'http://www.thetexasclassic.com/'
}, {
  title: 'Swingsation - Registry Event',
  start: '2017-05-19',
  end: '2017-05-22',
  url: 'http://rawconnection.com.au/swingsation/'
}, {
  title: 'Canadian Swing Championships (CSC) - Registry Event',
  start: '2017-05-19',
  end: '2017-05-23',
  url: 'http://canadianswingchampionships.com'
}, {
  title: 'SOswing Convention - Registry Event',
  start: '2017-05-19',
  end: '2017-05-22',
  url: 'http://23.235.192.56/~soswin5/'
}, {
  title: 'USA Grand National Dance Championship    (NASDE) - Registry Event',
  start: '2017-05-25',
  end: '2017-05-30',
  url: 'http://usagrandnationals.com/GNDC/'
}, {
  title: 'FreZno Dance Classic - Registry Event',
  start: '2017-05-25',
  end: '2017-05-30',
  url: 'http://freznodanceclassic.weebly.com'
}, {
  title: 'French Open West Coast Swing - Registry Event',
  start: '2017-05-25',
  end: '2017-05-29',
  url: 'http://www.fowcs.com/'
}, {
  title: 'Show-Me Showdown - Registry Event',
  start: '2017-05-26',
  end: '2017-05-31',
  url: 'http://www.theshowmeshowdown.com'
}, {
  title: 'Hungarian Open - Registry Event',
  start: '2017-05-26',
  end: '2017-05-29',
  url: 'http://www.wcs-ho.com'
}, {
  title: 'Orange Blossom Dance Festival - Registry Event',
  start: '2017-06-01',
  end: '2017-06-05',
  url: 'http://www.orangeblossomdance.net'
}, {
  title: 'Michigan Classic - Registry Event',
  start: '2017-06-01',
  end: '2017-06-05',
  url: 'http://michiganclassicswing.com/'
}, {
  title: 'Slingshot Swing - Registry Event',
  start: '2017-06-07',
  end: '2017-06-08',
  url: 'http://www.slingshotswing.no/'
}, {
  title: 'Jack & Jill O\'Rama - Registry Event',
  start: '2017-06-08',
  end: '2017-06-13',
  url: 'http://jackandjillorama.com/'
}, {
  title: 'CMJ NSW West Coast Swing Dance Championships - Registry Event',
  start: '2017-06-08',
  end: '2017-06-09',
  url: 'http://www.ceroc.com.au/events/championships/'
}, {
  title: 'Baltic Swing - Registry Event',
  start: '2017-06-08',
  end: '2017-06-12',
  url: 'http://www.balticswing.pl'
}, {
  title: 'Swing Open Kazan - Registry Event',
  start: '2017-06-09',
  end: '2017-06-13',
  url: 'https://vk.com/event137657917'
}, {
  title: 'D-Townswing - Registry Event',
  start: '2017-06-15',
  end: '2017-06-19',
  url: 'http://d-townswing.com'
}, {
  title: 'Dance N Play - Registry Event',
  start: '2017-06-15',
  end: '2017-06-19',
  url: 'http://dancenplay.com'
}, {
  title: 'Finnfest - Registry Event',
  start: '2017-06-15',
  end: '2017-06-20',
  url: 'http://www.rytmipolku.com/finnfest'
}, {
  title: 'Swingapalooza - Registry Event',
  start: '2017-06-16',
  end: '2017-06-19',
  url: 'http://www.swingapaloozaevent.com/'
}, {
  title: 'Colorado Country Classic - Registry Event',
  start: '2017-06-22',
  end: '2017-06-26',
  url: 'http://www.coloradocountryclassic.net/'
}, {
  title: 'Korea Westival - Registry Event',
  start: '2017-06-23',
  end: '2017-06-26',
  url: 'http://www.koreawestival.com'
}, {
  title: 'American  Dance Camp - Non-Registry',
  start: '2017-06-28',
  end: '2017-07-03',
  url: 'http://www.americanodance.ru'
}, {
  title: 'Ft. Lauderdale Swing & Shag Beach Bash - Registry Event',
  start: '2017-06-29',
  end: '2017-07-04',
  url: 'http://flssbb.net'
}, {
  title: 'Liberty Swing Championships      (NASDE) - Registry Event',
  start: '2017-06-29',
  end: '2017-07-03',
  url: 'http://www.libertyswing.com'
}, {
  title: 'New Zealand Open Swing Dance Championships - Registry Event',
  start: '2017-06-30',
  end: '2017-07-03',
  url: 'http://www.thenzopen.co.nz'
}, {
  title: 'Indy Dance Explosion - Registry Event',
  start: '2017-06-30',
  end: '2017-07-04',
  url: 'http://www.indydancex.com'
}, {
  title: 'Neverland Swing  - Registry Event',
  start: '2017-06-30',
  end: '2017-07-04',
  url: 'http://www.neverlandswing.nl/'
}, {
  title: 'Sao Paulo Swing Dance Championships - Registry Event',
  start: '2017-07-05',
  end: '2017-07-06',
  url: 'http://www.spsd.com.br'
}, {
  title: 'Wild Wild Westie - Registry Event',
  start: '2017-07-06',
  end: '2017-07-10',
  url: 'http://www.wildwildwestie.com'
}, {
  title: 'Big Apple Country Dance & NY Swing Congress - Registry Event',
  start: '2017-07-06',
  end: '2017-07-10',
  url: 'http://www.bigapplecountrydance.com/'
}, {
  title: 'GPSDC Annual July 4th Convention - Registry Event',
  start: '2017-07-06',
  end: '2017-07-10',
  url: 'http://www.phoenixjuly4thswingconvention.com'
}, {
  title: 'Portland Dance Festival - Registry Event',
  start: '2017-07-07',
  end: '2017-07-10',
  url: 'http://www.portlanddancefestival.com'
}, {
  title: 'Toronto Open Swing/Hustle Championships - Registry Event',
  start: '2017-07-13',
  end: '2017-07-17',
  url: 'http://www.toshc.com/'
}, {
  title: 'Florida Dance Magic - Registry Event',
  start: '2017-07-13',
  end: '2017-07-17',
  url: 'http://www.floridadancemagic.com'
}, {
  title: 'New Orleans Dance Mardi Gras - Registry Event',
  start: '2017-07-20',
  end: '2017-07-24',
  url: 'http://www.dancemardigras.com'
}, {
  title: 'Rock The Barn - Registry Event',
  start: '2017-07-20',
  end: '2017-07-24',
  url: 'http://wcsumea.se/rock-the-barn/index.html'
}, {
  title: 'Sacramento All Swing - Registry Event',
  start: '2017-07-20',
  end: '2017-07-24',
  url: 'http://www.sacramentoallswing.com/'
}, {
  title: 'Swing It Like It\'s Hot - Registry Event',
  start: '2017-07-21',
  end: '2017-07-24',
  url: 'http://www.swingithot.com'
}, {
  title: 'Swingtime in the Rockies   (NASDE) - Registry Event',
  start: '2017-07-27',
  end: '2017-07-31',
  url: 'http://www.swingtimeintherockies.com/'
}, {
  title: 'Palm Springs Summer Dance Camp Classic - Registry Event',
  start: '2017-07-27',
  end: '2017-07-31',
  url: 'http://www.peoplewhodance.net/'
}, {
  title: 'Sea Sun & Swing Camp - Registry Event',
  start: '2017-07-28',
  end: '2017-08-07',
  url: 'http://www.seasunswing.net/'
}, {
  title: 'Arizona Dance Classic - Registry Event',
  start: '2017-08-02',
  end: '2017-08-03',
  url: 'http://www.arizonadanceclassic.com/'
}, {
  title: 'New England Dance Festival - Registry Event',
  start: '2017-08-03',
  end: '2017-08-07',
  url: 'http://www.nedancefestival.com/'
}, {
  title: 'Midwest Westie Fest - Registry Event',
  start: '2017-08-03',
  end: '2017-08-07',
  url: 'http://www.midwestwestiefest.com/'
}, {
  title: 'Tampa Bay Classic (NASDE) - Registry Event',
  start: '2017-08-03',
  end: '2017-08-07',
  url: 'http://tampabayclassic.com'
}, {
  title: 'Swingtacular: The Galactic Open - Registry Event',
  start: '2017-08-04',
  end: '2017-08-07',
  url: 'http://www.dancegeekproductions.com/'
}, {
  title: 'German Open WCS Championships - Registry Event',
  start: '2017-08-10',
  end: '2017-08-14',
  url: 'https://go-wcs.com'
}, {
  title: 'Swing Fling - Registry Event',
  start: '2017-08-10',
  end: '2017-08-14',
  url: 'http://www.swingfling.com/'
}, {
  title: 'Rija Summer Swing - Registry Event',
  start: '2017-08-10',
  end: '2017-08-15',
  url: 'http://rigasummerswing.com/#home'
}, {
  title: 'LoneStar Invitational - Registry Event',
  start: '2017-08-11',
  end: '2017-08-14',
  url: 'http://www.lonestarcountrydance.com/'
}, {
  title: 'Chicagoland Country & Swing Dance Festival - Registry Event',
  start: '2017-08-18',
  end: '2017-08-21',
  url: 'http://www.chicagolanddancefestival.com'
}, {
  title: 'Swedish Swing Summer Camp - Registry Event',
  start: '2017-08-18',
  end: '2017-08-21',
  url: 'http://www.wcs.dance/sssc/'
}, {
  title: 'Summer Hummer    (NASDE) - Registry Event',
  start: '2017-08-23',
  end: '2017-08-24',
  url: 'http://www.dancepros.net/'
}, {
  title: 'River City Swing - Registry Event',
  start: '2017-08-31',
  end: '2017-09-04',
  url: 'http://www.rivercityswing.com/'
}, {
  title: 'Desert City Swing - Registry Event',
  start: '2017-08-31',
  end: '2017-09-05',
  url: 'http://www.desertcityswing.com'
}, {
  title: 'South Bay Dance Fling - Registry Event',
  start: '2017-08-31',
  end: '2017-09-05',
  url: 'http://www.southbaydancefling.com'
}, {
  title: 'Dallas D.A.N.C.E. - Registry Event',
  start: '2017-09-01',
  end: '2017-09-04',
  url: 'http://www.dallasdance.com/'
}, {
  title: 'Sunny Side Dance Camp - Registry Event',
  start: '2017-09-03',
  end: '2017-09-11',
  url: 'http://www.improteam.com/'
}, {
  title: 'Bavarian Open WCS - Registry Event',
  start: '2017-09-07',
  end: '2017-09-11',
  url: 'http://bavarianopen.com/'
}, {
  title: 'Trilogy Swing - Registry Event',
  start: '2017-09-07',
  end: '2017-09-11',
  url: 'http://www.swingtrilogy.com'
}, {
  title: 'Upstate Dance Challenge - Registry Event',
  start: '2017-09-07',
  end: '2017-09-11',
  url: 'http://www.upstatedancechallenge.com'
}, {
  title: 'Norway Westie Fest - Registry Event',
  start: '2017-09-14',
  end: '2017-09-18',
  url: 'http://www.westie-fest.com/'
}, {
  title: 'Best of the Best - Registry Event',
  start: '2017-09-14',
  end: '2017-09-18',
  url: 'http://www.bestofthebestwcs.com/'
}, {
  title: 'Rocky Mountain Five Dance (RM5) - Registry Event',
  start: '2017-09-15',
  end: '2017-09-18',
  url: 'http://www.rm5dance.com'
}, {
  title: 'BridgeTown Swing - Registry Event',
  start: '2017-09-21',
  end: '2017-09-25',
  url: 'http://www.portlandswing.org/bts'
}, {
  title: 'Meet Me in St. Louis Swing Dance Championships - Registry Event',
  start: '2017-09-21',
  end: '2017-09-25',
  url: 'http://www.meetmeinstlouissdc.com'
}, {
  title: 'Citadel Swing - Registry Event',
  start: '2017-09-22',
  end: '2017-09-25',
  url: 'http://www.citadelswing.ro/'
}, {
  title: 'Philly Swing Classic - Registry Event',
  start: '2017-09-22',
  end: '2017-09-25',
  url: 'http://phillyswings.com'
}, {
  title: 'Atlanta Swing Classic - Registry Event',
  start: '2017-09-29',
  end: '2017-10-02',
  url: 'http://www.atlantaswingclassic.com/'
}, {
  title: 'Midland Swing Open - Registry Event',
  start: '2017-09-29',
  end: '2017-10-02',
  url: 'http://www.midlandswingopen.com'
}, {
  title: 'Old Town Swing - Registry Event',
  start: '2017-09-29',
  end: '2017-10-02',
  url: 'http://oldtowndance.com/'
}, {
  title: 'Boogie By The Bay    (NASDE) - Registry Event',
  start: '2017-10-05',
  end: '2017-10-09',
  url: 'http://boogiebythebay.com'
}, {
  title: 'Italian Open West Coast Swing - Registry Event',
  start: '2017-10-13',
  end: '2017-10-16',
  url: 'http://www.westcoastswingitaly.it/en/'
}, {
  title: 'Montreal Westie Fest - Registry Event',
  start: '2017-10-13',
  end: '2017-10-16',
  url: 'http://www.montrealwestiefest.com'
}, {
  title: 'Paradise Country & Swing Dance Festival - Registry Event',
  start: '2017-10-19',
  end: '2017-10-23',
  url: 'http://www.paradisecountrydancefestival.com/www.paradisecountrydancefestival.com/HOME.html'
}, {
  title: 'Swustlicious - Registry Event',
  start: '2017-10-20',
  end: '2017-10-23',
  url: 'http://sparklage.com/swustlicious/'
}, {
  title: 'Scandinavian Open WCS - Registry Event',
  start: '2017-10-20',
  end: '2017-10-23',
  url: 'http://www.snowcs.se'
}, {
  title: 'European Swing Challenge - Non-Registry',
  start: '2017-10-20',
  end: '2017-10-24',
  url: 'http://www.jiveaddiction.com/event-type/west-coast-swing/uk-european-wcs-championships-2017'
}, {
  title: 'Halloween Swingthing - Registry Event',
  start: '2017-10-26',
  end: '2017-10-30',
  url: 'http://www.halloweenswingthing.com/'
}, {
  title: 'Swing City Chicago - Registry Event',
  start: '2017-10-27',
  end: '2017-10-31',
  url: 'http://swingcitychicago.com',
  country: 'USA',
  address: 'Lombard Westin at Yorktown Center, 70 Yorktown Center, Illinois 60148, United States',
  hotel_url: 'http://swingcitychicago.com/location/'
}, {
  title: 'Moscow Westie Fest - Registry Event',
  start: '2017-11-02',
  end: '2017-11-06',
  url: 'http://westiefest.org/en/',
  country: 'Russia'
}, {
  title: 'Mountain Magic Dance Convention - Registry Event',
  start: '2017-11-02',
  end: '2017-11-06',
  url: 'http://www.michelledance.com/mmm.html',
  country: 'USA',
  address: '55 US-50, Nevada 89449, United States',
  hotel_url: 'http://www.michelledance.com//mmm.html#hotel'
}, {
  title: 'Swingin\' New England Dance Festival - Registry Event',
  start: '2017-11-09',
  end: '2017-11-13',
  url: 'http://www.swingingnewengland.com',
  country: 'USA',
  address: '2345 Commonwealth Avenue, Massachusetts 02466, United States',
  hotel_url: 'http://www.swingingnewengland.com/hotel.html',
  registration: 'http://www.swingingnewengland.com/sign-up.html',
  guests: [],
  prices: []
}, {
  title: 'Sea To Sky - Seattle - Registry Event',
  start: '2017-11-09',
  end: '2017-11-14',
  url: 'http://www.seatoskydance.com/',
  country: 'USA'
}, {
  title: 'London SWINGvitational  - Registry Event',
  start: '2017-11-16',
  end: '2017-11-21',
  url: 'http://www.londonswingvitational.co.uk',
  country: 'UK'
}, {
  title: 'DC Swing Experience (DCSX) - Registry Event',
  start: '2017-11-16',
  end: '2017-11-20',
  url: 'http://www.dcswingexperience.com',
  country: 'USA',
  address: '2300 Dulles Corner Blvd, Virginia 20171 , United States',
  hotel_url: 'http://www.dcswingexperience.com/hotel.htm',
  registration: 'http://www.dcswingexperience.com/tickets.htm',
  guests: [],
  prices: []
}, {
  title: 'US Open Swing Dance Championships     (NASDE) - Registry Event',
  start: '2017-11-23',
  end: '2017-11-27',
  url: 'http://usopenswing.com',
  country: 'USA'
}, {
  title: 'The After Party - Registry Event',
  start: '2017-11-30',
  end: '2017-12-04',
  url: 'http://www.tapwcs.com',
  country: 'USA'
}, {
  title: 'Winter White WCS - Registry Event',
  start: '2017-12-01',
  end: '2017-12-04',
  url: 'http://www.winterwhitewcs.com',
  country: 'Norway'
}, {
  title: 'Palm Springs New Year - Registry Event',
  start: '2017-12-28',
  end: '2018-01-02',
  url: 'http://peoplewhodance.net/',
  country: 'USA'
}, {
  title: 'Monterey Swingfest - Registry Event',
  start: '2018-01-11',
  end: '2018-01-15',
  url: 'http://www.centralcoastswingdance.com/',
  country: 'USA'
}, {
  title: 'Austin Swing Dance Championships - Registry Event',
  start: '2018-01-12',
  end: '2018-01-16',
  url: 'http://www.austinswingdancechampionships.com',
  country: 'USA'
}, {
  title: 'Derby City Swing - Registry Event',
  start: '2018-01-25',
  end: '2018-01-29',
  url: 'http://www.DerbyCitySwing.com',
  country: 'USA'
}, {
  title: 'Charlotte Westie Fest - Registry Event',
  start: '2018-02-01',
  end: '2018-02-06',
  url: 'http://www.charlottewestiefest.com/',
  country: 'USA'
}, {
  title: 'Swing & Snow - Registry Event',
  start: '2018-02-01',
  end: '2018-02-05',
  url: 'http://swingandsnow.ru',
  country: 'Russia',
  address: 'Sankt-Peterburgskiy pr. 34, Saint Petersburg 198510, Russia',
  hotel_url: 'http://swingandsnow.ru/lang/en/venue/',
  registration: 'http://swingandsnow.ru/lang/en/registration/',
  guests: [],
  prices: []
}]

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  search: ['searchTerm'],
  cancelSearch: null
})

export const TemperatureTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  searchTerm: '',
  searching: false,
  results: LIST_DATA
})

/* ------------- Reducers ------------- */

export const performSearch = (state, { searchTerm }) => {
  const results = LIST_DATA.filter((event) => event.title.toUpperCase().includes(searchTerm.toUpperCase()))
  return state.merge({ searching: true, searchTerm, results })
}

export const cancelSearch = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH]: performSearch,
  [Types.CANCEL_SEARCH]: cancelSearch
})
