import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const LIST_DATA = [ { title: 'SwingDiego (The Superbowl of Swing) - Registry Event',
    start: '2017-05-04',
    end: '2017-05-08',
    url: 'http://www.swingdiego.com/',
    id: 0 },
  { title: 'Swingin - Registry Event',
    start: '2017-05-04',
    end: '2017-05-08',
    url: 'http://www.sis.djkenm.com',
    id: 1 },
  { title: 'Scotland Swing Classic - Registry Event',
    start: '2017-05-05',
    end: '2017-05-08',
    url: 'http://scotlandswingclassic.com',
    id: 2 },
  { title: 'KIWI Fest - Registry Event',
    start: '2017-05-05',
    end: '2017-05-08',
    url: 'http://',
    id: 3 },
  { title: 'The Texas Classic - Registry Event',
    start: '2017-05-18',
    end: '2017-05-22',
    url: 'http://www.thetexasclassic.com/',
    id: 4 },
  { title: 'Swingsation - Registry Event',
    start: '2017-05-19',
    end: '2017-05-22',
    url: 'http://rawconnection.com.au/swingsation/',
    id: 5 },
  { title: 'Canadian Swing Championships (CSC) - Registry Event',
    start: '2017-05-19',
    end: '2017-05-23',
    url: 'http://canadianswingchampionships.com',
    id: 6 },
  { title: 'SOswing Convention - Registry Event',
    start: '2017-05-19',
    end: '2017-05-22',
    url: 'http://23.235.192.56/~soswin5/',
    id: 7 },
  { title: 'USA Grand National Dance Championship    (NASDE) - Registry Event',
    start: '2017-05-25',
    end: '2017-05-30',
    url: 'http://usagrandnationals.com/GNDC/',
    id: 8 },
  { title: 'FreZno Dance Classic - Registry Event',
    start: '2017-05-25',
    end: '2017-05-30',
    url: 'http://freznodanceclassic.weebly.com',
    id: 9 },
  { title: 'French Open West Coast Swing - Registry Event',
    start: '2017-05-25',
    end: '2017-05-29',
    url: 'http://www.fowcs.com/',
    id: 10 },
  { title: 'Show-Me Showdown - Registry Event',
    start: '2017-05-26',
    end: '2017-05-31',
    url: 'http://www.theshowmeshowdown.com',
    id: 11 },
  { title: 'Hungarian Open - Registry Event',
    start: '2017-05-26',
    end: '2017-05-29',
    url: 'http://www.wcs-ho.com',
    id: 12 },
  { title: 'Orange Blossom Dance Festival - Registry Event',
    start: '2017-06-01',
    end: '2017-06-05',
    url: 'http://www.orangeblossomdance.net',
    id: 13 },
  { title: 'Michigan Classic - Registry Event',
    start: '2017-06-01',
    end: '2017-06-05',
    url: 'http://michiganclassicswing.com/',
    id: 14 },
  { title: 'Slingshot Swing - Registry Event',
    start: '2017-06-07',
    end: '2017-06-08',
    url: 'http://www.slingshotswing.no/',
    id: 15 },
  { title: 'Jack & Jill O\'Rama - Registry Event',
    start: '2017-06-08',
    end: '2017-06-13',
    url: 'http://jackandjillorama.com/',
    id: 16 },
  { title: 'CMJ NSW West Coast Swing Dance Championships - Registry Event',
    start: '2017-06-08',
    end: '2017-06-09',
    url: 'http://www.ceroc.com.au/events/championships/',
    id: 17 },
  { title: 'Baltic Swing - Registry Event',
    start: '2017-06-08',
    end: '2017-06-12',
    url: 'http://www.balticswing.pl',
    id: 18 },
  { title: 'Swing Open Kazan - Registry Event',
    start: '2017-06-09',
    end: '2017-06-13',
    url: 'https://vk.com/event137657917',
    id: 19 },
  { title: 'D-Townswing - Registry Event',
    start: '2017-06-15',
    end: '2017-06-19',
    url: 'http://d-townswing.com',
    id: 20 },
  { title: 'Dance N Play - Registry Event',
    start: '2017-06-15',
    end: '2017-06-19',
    url: 'http://dancenplay.com',
    id: 21 },
  { title: 'Finnfest - Registry Event',
    start: '2017-06-15',
    end: '2017-06-20',
    url: 'http://www.rytmipolku.com/finnfest',
    id: 22 },
  { title: 'Swingapalooza - Registry Event',
    start: '2017-06-16',
    end: '2017-06-19',
    url: 'http://www.swingapaloozaevent.com/',
    id: 23 },
  { title: 'Colorado Country Classic - Registry Event',
    start: '2017-06-22',
    end: '2017-06-26',
    url: 'http://www.coloradocountryclassic.net/',
    id: 24 },
  { title: 'Korea Westival - Registry Event',
    start: '2017-06-23',
    end: '2017-06-26',
    url: 'http://www.koreawestival.com',
    id: 25 },
  { title: 'American  Dance Camp - Non-Registry',
    start: '2017-06-28',
    end: '2017-07-03',
    url: 'http://www.americanodance.ru',
    id: 26 },
  { title: 'Ft. Lauderdale Swing & Shag Beach Bash - Registry Event',
    start: '2017-06-29',
    end: '2017-07-04',
    url: 'http://flssbb.net',
    id: 27 },
  { title: 'Liberty Swing Championships      (NASDE) - Registry Event',
    start: '2017-06-29',
    end: '2017-07-03',
    url: 'http://www.libertyswing.com',
    id: 28 },
  { title: 'New Zealand Open Swing Dance Championships - Registry Event',
    start: '2017-06-30',
    end: '2017-07-03',
    url: 'http://www.thenzopen.co.nz',
    id: 29 },
  { title: 'Indy Dance Explosion - Registry Event',
    start: '2017-06-30',
    end: '2017-07-04',
    url: 'http://www.indydancex.com',
    id: 30 },
  { title: 'Neverland Swing  - Registry Event',
    start: '2017-06-30',
    end: '2017-07-04',
    url: 'http://www.neverlandswing.nl/',
    id: 31 },
  { title: 'Sao Paulo Swing Dance Championships - Registry Event',
    start: '2017-07-05',
    end: '2017-07-06',
    url: 'http://www.spsd.com.br',
    id: 32 },
  { title: 'Wild Wild Westie - Registry Event',
    start: '2017-07-06',
    end: '2017-07-10',
    url: 'http://www.wildwildwestie.com',
    id: 33 },
  { title: 'Big Apple Country Dance & NY Swing Congress - Registry Event',
    start: '2017-07-06',
    end: '2017-07-10',
    url: 'http://www.bigapplecountrydance.com/',
    id: 34 },
  { title: 'GPSDC Annual July 4th Convention - Registry Event',
    start: '2017-07-06',
    end: '2017-07-10',
    url: 'http://www.phoenixjuly4thswingconvention.com',
    id: 35 },
  { title: 'Portland Dance Festival - Registry Event',
    start: '2017-07-07',
    end: '2017-07-10',
    url: 'http://www.portlanddancefestival.com',
    id: 36 },
  { title: 'Toronto Open Swing/Hustle Championships - Registry Event',
    start: '2017-07-13',
    end: '2017-07-17',
    url: 'http://www.toshc.com/',
    id: 37 },
  { title: 'Florida Dance Magic - Registry Event',
    start: '2017-07-13',
    end: '2017-07-17',
    url: 'http://www.floridadancemagic.com',
    id: 38 },
  { title: 'New Orleans Dance Mardi Gras - Registry Event',
    start: '2017-07-20',
    end: '2017-07-24',
    url: 'http://www.dancemardigras.com',
    id: 39 },
  { title: 'Rock The Barn - Registry Event',
    start: '2017-07-20',
    end: '2017-07-24',
    url: 'http://wcsumea.se/rock-the-barn/index.html',
    id: 40 },
  { title: 'Sacramento All Swing - Registry Event',
    start: '2017-07-20',
    end: '2017-07-24',
    url: 'http://www.sacramentoallswing.com/',
    id: 41 },
  { title: 'Swing It Like It\'s Hot - Registry Event',
    start: '2017-07-21',
    end: '2017-07-24',
    url: 'http://www.swingithot.com',
    id: 42 },
  { title: 'Swingtime in the Rockies   (NASDE) - Registry Event',
    start: '2017-07-27',
    end: '2017-07-31',
    url: 'http://www.swingtimeintherockies.com/',
    id: 43 },
  { title: 'Palm Springs Summer Dance Camp Classic - Registry Event',
    start: '2017-07-27',
    end: '2017-07-31',
    url: 'http://www.peoplewhodance.net/',
    id: 44 },
  { title: 'Sea Sun & Swing Camp - Registry Event',
    start: '2017-07-28',
    end: '2017-08-07',
    url: 'http://www.seasunswing.net/',
    id: 45 },
  { title: 'Arizona Dance Classic - Registry Event',
    start: '2017-08-02',
    end: '2017-08-03',
    url: 'http://www.arizonadanceclassic.com/',
    id: 46 },
  { title: 'New England Dance Festival - Registry Event',
    start: '2017-08-03',
    end: '2017-08-07',
    url: 'http://www.nedancefestival.com/',
    id: 47 },
  { title: 'Midwest Westie Fest - Registry Event',
    start: '2017-08-03',
    end: '2017-08-07',
    url: 'http://www.midwestwestiefest.com/',
    id: 48 },
  { title: 'Tampa Bay Classic (NASDE) - Registry Event',
    start: '2017-08-03',
    end: '2017-08-07',
    url: 'http://tampabayclassic.com',
    id: 49 },
  { title: 'Swingtacular: The Galactic Open - Registry Event',
    start: '2017-08-04',
    end: '2017-08-07',
    url: 'http://www.dancegeekproductions.com/',
    id: 50 },
  { title: 'German Open WCS Championships - Registry Event',
    start: '2017-08-10',
    end: '2017-08-14',
    url: 'https://go-wcs.com',
    id: 51 },
  { title: 'Swing Fling - Registry Event',
    start: '2017-08-10',
    end: '2017-08-14',
    url: 'http://www.swingfling.com/',
    id: 52 },
  { title: 'Rija Summer Swing - Registry Event',
    start: '2017-08-10',
    end: '2017-08-15',
    url: 'http://rigasummerswing.com/#home',
    id: 53 },
  { title: 'LoneStar Invitational - Registry Event',
    start: '2017-08-11',
    end: '2017-08-14',
    url: 'http://www.lonestarcountrydance.com/',
    id: 54 },
  { title: 'Chicagoland Country & Swing Dance Festival - Registry Event',
    start: '2017-08-18',
    end: '2017-08-21',
    url: 'http://www.chicagolanddancefestival.com',
    id: 55 },
  { title: 'Swedish Swing Summer Camp - Registry Event',
    start: '2017-08-18',
    end: '2017-08-21',
    url: 'http://www.wcs.dance/sssc/',
    id: 56 },
  { title: 'Summer Hummer    (NASDE) - Registry Event',
    start: '2017-08-23',
    end: '2017-08-24',
    url: 'http://www.dancepros.net/',
    id: 57 },
  { title: 'River City Swing - Registry Event',
    start: '2017-08-31',
    end: '2017-09-04',
    url: 'http://www.rivercityswing.com/',
    id: 58 },
  { title: 'Desert City Swing - Registry Event',
    start: '2017-08-31',
    end: '2017-09-05',
    url: 'http://www.desertcityswing.com',
    id: 59 },
  { title: 'South Bay Dance Fling - Registry Event',
    start: '2017-08-31',
    end: '2017-09-05',
    url: 'http://www.southbaydancefling.com',
    id: 60 },
  { title: 'Dallas D.A.N.C.E. - Registry Event',
    start: '2017-09-01',
    end: '2017-09-04',
    url: 'http://www.dallasdance.com/',
    id: 61 },
  { title: 'Sunny Side Dance Camp - Registry Event',
    start: '2017-09-03',
    end: '2017-09-11',
    url: 'http://www.improteam.com/',
    id: 62 },
  { title: 'Bavarian Open WCS - Registry Event',
    start: '2017-09-07',
    end: '2017-09-11',
    url: 'http://bavarianopen.com/',
    id: 63 },
  { title: 'Trilogy Swing - Registry Event',
    start: '2017-09-07',
    end: '2017-09-11',
    url: 'http://www.swingtrilogy.com',
    id: 64 },
  { title: 'Upstate Dance Challenge - Registry Event',
    start: '2017-09-07',
    end: '2017-09-11',
    url: 'http://www.upstatedancechallenge.com',
    id: 65 },
  { title: 'Norway Westie Fest - Registry Event',
    start: '2017-09-14',
    end: '2017-09-18',
    url: 'http://www.westie-fest.com/',
    id: 66 },
  { title: 'Best of the Best - Registry Event',
    start: '2017-09-14',
    end: '2017-09-18',
    url: 'http://www.bestofthebestwcs.com/',
    id: 67 },
  { title: 'Rocky Mountain Five Dance (RM5) - Registry Event',
    start: '2017-09-15',
    end: '2017-09-18',
    url: 'http://www.rm5dance.com',
    id: 68 },
  { title: 'BridgeTown Swing - Registry Event',
    start: '2017-09-21',
    end: '2017-09-25',
    url: 'http://www.portlandswing.org/bts',
    id: 69 },
  { title: 'Meet Me in St. Louis Swing Dance Championships - Registry Event',
    start: '2017-09-21',
    end: '2017-09-25',
    url: 'http://www.meetmeinstlouissdc.com',
    id: 70 },
  { title: 'Citadel Swing - Registry Event',
    start: '2017-09-22',
    end: '2017-09-25',
    url: 'http://www.citadelswing.ro/',
    id: 71 },
  { title: 'Philly Swing Classic - Registry Event',
    start: '2017-09-22',
    end: '2017-09-25',
    url: 'http://phillyswings.com',
    country: 'USA',
    address: '630 NAAMANS ROAD, Delaware 19703, United states',
    hotel_url: 'http://phillyswings.com/hotel/',
    registration: 'http://phillyswings.com/register/',
    guests:
     [ 'Melissa Rutz',
       'Parker Dearborn',
       'Robert Royston',
       'John Festa',
       'Kay Newhouse',
       'Matthew Smith',
       'Lara Deni',
       'Steve Wilder',
       'Brad Wheeler',
       'Sarah Wheeler',
       'Keith Stremmel',
       'Alyssa Gillespie',
       'Debbie Lynn Tuttle',
       'Jacqueline Joyner',
       'Matt Davis',
       'Desirae Vasquez' ],
    prices: [ [Object], [Object] ],
    id: 72 },
  { title: 'Atlanta Swing Classic - Registry Event',
    start: '2017-09-29',
    end: '2017-10-02',
    url: 'http://www.atlantaswingclassic.com/',
    country: 'USA',
    address: '4355 Ashford Dunwoody Road, Atlanta, GA 30346',
    hotel_url: 'http://www.atlantaswingclassic.com/hotel.html',
    registration: 'http://www.atlantaswingclassic.com/registration.html',
    guests:
     [ 'Robert Royston',
       'Brandi Guild',
       'Ben Morris',
       'Victoria Henk',
       'John Lindo',
       'Patty Vo',
       'Ben McHenry',
       'Cameo Cross',
       'Sean, McKeever',
       'Courtney Adair',
       'Kris Swearingen',
       'Tashina Beckmann',
       'Gregory Scott',
       'Lemery Rollins',
       'Stephen White',
       'Sonya Dessureault',
       'Laureen Mason',
       'Dawn Garrish',
       'Doug Rousar',
       'Debbie Ramsey',
       'Robin Smith',
       'Robert Cordoba' ],
    prices: [],
    id: 73 },
  { title: 'Midland Swing Open - Registry Event',
    start: '2017-09-29',
    end: '2017-10-02',
    url: 'http://www.midlandswingopen.com',
    country: 'UK',
    address: 'Copthorne Hotel, Slough, Windsor, SL1 2YE',
    hotel_url: 'http://midlandswingopen.com/hotel/',
    registration: 'http://midlandswingopen.com/passes/',
    guests:
     [ 'Kyle Redd',
       'Sarah Vann Drake',
       'Maxence Martin',
       'Virginie Grondin',
       'Maxime Zzaoui',
       'Torri Smith',
       'Lee Easton',
       'Fabienne Henshall' ],
    prices: [ [Object], [Object], [Object] ],
    id: 74 },
  { title: 'Old Town Swing - Registry Event',
    start: '2017-09-29',
    end: '2017-10-02',
    url: 'http://oldtowndance.com/',
    country: 'Estonia',
    address: 'Salme tn. 12, Tallinn, 10413, Estonia',
    hotel_url: 'http://oldtowndance.com/location',
    registration: 'http://oldtowndance.com/registration',
    guests:
     [ 'Tara Trafzer',
       'Christopher Dumond',
       'Oliver Massart',
       'Virginie Massart' ],
    prices: [ [Object], [Object], [Object], [Object] ],
    id: 75 },
  { title: 'Boogie By The Bay - Registry Event',
    start: '2017-10-05',
    end: '2017-10-09',
    url: 'http://boogiebythebay.com',
    country: 'USA',
    address: 'Hyatt Regency San Francisco Airport, 1333 Bayshore Hwy, Burlingame CA 94010',
    hotel_url: 'https://boogiebythebay.com/location/hotel/',
    registration: 'https://boogiebythebay.com/registration/',
    guests: [],
    prices: [],
    id: 76 },
  { title: 'Italian Open West Coast Swing - Registry Event',
    start: '2017-10-13',
    end: '2017-10-16',
    url: 'http://www.westcoastswingitaly.it/en/',
    country: 'Italy',
    address: 'Via Vittorio Padovani, 38, 20099 Sesto San Giovanni MI, Italia',
    hotel_url: 'http://www.westcoastswing.it/en/italian-open-13-14-15-october-2017/',
    registration: 'http://www.westcoastswing.it/en/italian-open-13-14-15-october-2017/',
    guests:
     [ 'Jordan Frisbee',
       'Tatiana Mollmann',
       'Lee Easton',
       'Fabienne Henshall',
       'Maxence Martin',
       'Virginie Grondin',
       'John Lindo',
       'Bret Navarre',
       'Joelle Navarre' ],
    prices: [ [Object] ],
    id: 77 },
  { title: 'Montreal Westie Fest - Registry Event',
    start: '2017-10-13',
    end: '2017-10-16',
    url: 'http://www.montrealwestiefest.com',
    country: 'Canada',
    address: 'Montreal, 800 Pl Leigh-Capreol, Quebec H4Y 0A4, Canada',
    hotel_url: 'http://www.montrealwestiefest.com/#post-328-title',
    registration: 'http://www.montrealwestiefest.com/#post-332',
    guests: [],
    prices: [],
    id: 78 },
  { title: 'Paradise Country & Swing Dance Festival - Registry Event',
    start: '2017-10-19',
    end: '2017-10-23',
    url: 'http://www.paradisecountrydancefestival.com/www.paradisecountrydancefestival.com/HOME.html',
    country: 'USA',
    address: 'Irvine, 1880 MacArthur Blvd, California 92612, United States',
    hotel_url: 'http://www.paradisecountrydancefestival.com/www.paradisecountrydancefestival.com/HOTEL.html',
    registration: 'http://www.paradisecountrydancefestival.com/www.paradisecountrydancefestival.com/ONLINE_REGISTRATION.html',
    guests: [],
    prices: [ [Object], [Object] ],
    id: 79 },
  { title: 'Swustlicious - Registry Event',
    start: '2017-10-20',
    end: '2017-10-23',
    url: 'http://sparklage.com/swustlicious/',
    country: 'USA',
    address: '240 Mall Boulevard, King of Prussia, PA, 19406',
    hotel_url: 'http://sparklage.com/hotel/',
    registration: 'http://sparklage.com/online-registration/',
    guests: [],
    prices: [ [Object], [Object], [Object], [Object] ],
    id: 80 },
  { title: 'Scandinavian Open WCS - Registry Event',
    start: '2017-10-20',
    end: '2017-10-23',
    url: 'http://www.snowcs.se',
    country: 'Sweden',
    address: 'Stockholm, Rökerigatan 21, Stockholm 121 62, Sweden',
    hotel_url: 'http://www.snowcs.se/venue.php',
    registration: 'http://www.snowcs.se/register.php',
    guests:
     [ 'Jordan Frisbee',
       'Tatiana Mollmann',
       'Maxence Martin',
       'Virginie Grondin',
       'Ludovic Pelegrin Pardou',
       'Natalyia Kharlanova',
       'Browly Adjavon' ],
    prices: [ [Object], [Object], [Object] ],
    id: 81 },
  { title: 'European Swing Challenge - Non-Registry',
    start: '2017-10-20',
    end: '2017-10-24',
    url: 'http://www.jiveaddiction.com/event-type/west-coast-swing/uk-european-wcs-championships-2017',
    country: 'UK',
    address: 'Beaumont Estate, Burfield Road, Old Windsor, Windsor, SL4 2JJ UK',
    hotel_url: 'http://www.jiveaddiction.com/event-type/west-coast-swing/european-swing-challenge#venue',
    registration: 'http://www.jiveaddiction.com/event-type/west-coast-swing/register-for-a-west-coast-swing-event/register?event=111&n=european-swing-challenge',
    guests:
     [ 'Robert Royston',
       'Brandi Guild',
       'Ben Morris',
       'Victoria Henk',
       'Hugo Miguez',
       'Stacey Kay',
       'Browly Adjavon',
       'Anyssa Rae Olivares' ],
    prices: [ [Object] ],
    id: 82 },
  { title: 'Halloween Swingthing - Registry Event',
    start: '2017-10-26',
    end: '2017-10-30',
    url: 'http://www.halloweenswingthing.com/',
    country: 'USA',
    address: '3635 Fashion Way, Torrance, California 90503, UNITED STATES',
    hotel_url: 'http://centralcoastswingdance.com/halloween/halloween/HST_Hotel.html',
    registration: 'http://centralcoastswingdance.com/halloween/halloween/Tickets_buttons.html',
    guests:
     [ 'Benji Schwimmer',
       'Kyle Redd',
       'Sarah Vann Drake',
       'Ben Morris',
       'Victoria Henk',
       'Parker Dearborn',
       'Melissa Rutz',
       'John Lindo',
       'Ben McHenry',
       'Cameo Cross' ],
    prices: [ [Object] ],
    id: 83 },
  { title: 'Swing City Chicago - Registry Event',
    start: '2017-10-27',
    end: '2017-10-31',
    url: 'http://swingcitychicago.com',
    country: 'USA',
    address: 'Lombard Westin at Yorktown Center, 70 Yorktown Center, Illinois 60148, United States',
    hotel_url: 'http://swingcitychicago.com/location/',
    id: 84 },
  { title: 'Moscow Westie Fest - Registry Event',
    start: '2017-11-02',
    end: '2017-11-06',
    url: 'http://westiefest.org/en/',
    country: 'Russia',
    id: 85 },
  { title: 'Mountain Magic Dance Convention - Registry Event',
    start: '2017-11-02',
    end: '2017-11-06',
    url: 'http://www.michelledance.com/mmm.html',
    country: 'USA',
    address: '55 US-50, Nevada 89449, United States',
    hotel_url: 'http://www.michelledance.com//mmm.html#hotel',
    id: 86 },
  { title: 'Swingin\' New England Dance Festival - Registry Event',
    start: '2017-11-09',
    end: '2017-11-13',
    url: 'http://www.swingingnewengland.com',
    country: 'USA',
    address: '2345 Commonwealth Avenue, Massachusetts 02466, United States',
    hotel_url: 'http://www.swingingnewengland.com/hotel.html',
    registration: 'http://www.swingingnewengland.com/sign-up.html',
    guests: [],
    prices: [],
    id: 87 },
  { title: 'Sea To Sky - Seattle - Registry Event',
    start: '2017-11-09',
    end: '2017-11-14',
    url: 'http://www.seatoskydance.com/',
    country: 'USA',
    id: 88 },
  { title: 'London SWINGvitational  - Registry Event',
    start: '2017-11-16',
    end: '2017-11-21',
    url: 'http://www.londonswingvitational.co.uk',
    country: 'UK',
    id: 89 },
  { title: 'DC Swing Experience (DCSX) - Registry Event',
    start: '2017-11-16',
    end: '2017-11-20',
    url: 'http://www.dcswingexperience.com',
    country: 'USA',
    address: '2300 Dulles Corner Blvd, Virginia 20171 , United States',
    hotel_url: 'http://www.dcswingexperience.com/hotel.htm',
    registration: 'http://www.dcswingexperience.com/tickets.htm',
    guests: [],
    prices: [],
    id: 90 },
  { title: 'US Open Swing Dance Championships     (NASDE) - Registry Event',
    start: '2017-11-23',
    end: '2017-11-27',
    url: 'http://usopenswing.com',
    country: 'USA',
    id: 91 },
  { title: 'The After Party - Registry Event',
    start: '2017-11-30',
    end: '2017-12-04',
    url: 'http://www.tapwcs.com',
    country: 'USA',
    id: 92 },
  { title: 'Winter White WCS - Registry Event',
    start: '2017-12-01',
    end: '2017-12-04',
    url: 'http://www.winterwhitewcs.com',
    country: 'Norway',
    id: 93 },
  { title: 'Palm Springs New Year - Registry Event',
    start: '2017-12-28',
    end: '2018-01-02',
    url: 'http://peoplewhodance.net/',
    country: 'USA',
    id: 94 },
  { title: 'Monterey Swingfest - Registry Event',
    start: '2018-01-11',
    end: '2018-01-15',
    url: 'http://www.centralcoastswingdance.com/',
    country: 'USA',
    id: 95 },
  { title: 'Austin Swing Dance Championships - Registry Event',
    start: '2018-01-12',
    end: '2018-01-16',
    url: 'http://www.austinswingdancechampionships.com',
    country: 'USA',
    id: 96 },
  { title: 'Derby City Swing - Registry Event',
    start: '2018-01-25',
    end: '2018-01-29',
    url: 'http://www.DerbyCitySwing.com',
    country: 'USA',
    id: 97 },
  { title: 'Charlotte Westie Fest - Registry Event',
    start: '2018-02-01',
    end: '2018-02-06',
    url: 'http://www.charlottewestiefest.com/',
    country: 'USA',
    id: 98 },
  { title: 'Swing & Snow - Registry Event',
    start: '2018-02-01',
    end: '2018-02-05',
    url: 'http://swingandsnow.ru',
    country: 'Russia',
    address: 'Sankt-Peterburgskiy pr. 34, Saint Petersburg 198510, Russia',
    hotel_url: 'http://swingandsnow.ru/lang/en/venue/',
    registration: 'http://swingandsnow.ru/lang/en/registration/',
    guests: [],
    prices: [],
    id: 99 }]

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
