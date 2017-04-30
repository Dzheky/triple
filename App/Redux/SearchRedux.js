import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { filter } from 'ramda'
import { startsWith } from 'ramdasauce'

const LIST_DATA = [
		             {
		title: 'Korea Westival - Registry Event',
		start: '2016-10-21',
		end: '2016-10-24',
		url: 'http://www.koreawestival.com'
	},{
		title: 'Midland Swing Open - Registry Event',
		start: '2016-09-30',
		end: '2016-10-03',
		url: 'http://www.midlandswingopen.com'
	},{
		title: 'Freedom Swing Dance Challenge - Registry Event',
		start: '2017-01-13',
		end: '2017-01-16',
		url: 'http://www.freedomswingdance.com'
	},{
		title: 'Austrian WCS Spectacle - Registry Event',
		start: '2016-04-08',
		end: '2016-04-11',
		url: 'http://www.wcs-spectacle.at'
	},{
		title: 'Detonation Dance - Registry Event',
		start: '2016-04-21',
		end: '2016-04-25',
		url: 'http://www.detonationdance.com/'
	},{
		title: 'Asia West Coast Swing Open - Registry Event',
		start: '2016-04-21',
		end: '2016-04-25',
		url: 'http://www.asiawcsopen.com/'
	},{
		title: 'MidAtlantic Dance Classic - Registry Event',
		start: '2016-04-28',
		end: '2016-05-02',
		url: 'http://www.midatlanticdanceclassic.com/'
	},{
		title: 'Swing Dance America - Registry Event',
		start: '2016-04-28',
		end: '2016-05-03',
		url: 'http://www.swingdanceamerica.com/'
	},{
		title: 'Nordic WCS Champ - Registry Event',
		start: '2016-04-28',
		end: '2016-05-03',
		url: 'http://www.nordicwcschamps.com/'
	},{
		title: 'French Open West Coast Swing - Registry Event',
		start: '2016-05-05',
		end: '2016-05-09',
		url: 'http://www.fowcs.com/'
	},{
		title: 'KIWI Fest - Registry Event',
		start: '2016-05-06',
		end: '2016-05-10',
		url: 'http://www.kiwifest.info'
	},{
		title: 'SwingDiego (The Superbowl of Swing) - Registry Event',
		start: '2016-05-12',
		end: '2016-05-16',
		url: 'http://www.swingdiego.com/'
	},{
		title: 'SOswing Convention - Registry Event',
		start: '2016-05-20',
		end: '2016-05-23',
		url: 'http://23.235.192.56/~soswin5/'
	},{
		title: 'Swingsation - Registry Event',
		start: '2016-05-19',
		end: '2016-05-23',
		url: 'http://rawconnection.com.au/swingsation/'
	},{
		title: 'The Texas Classic - Registry Event',
		start: '2016-05-19',
		end: '2016-05-23',
		url: 'http://www.thetexasclassic.com/'
	},{
		title: 'USA Grand National Dance Championship - Registry Event',
		start: '2016-05-26',
		end: '2016-05-31',
		url: 'http://usagrandnationals.com/GNDC/'
	},{
		title: 'FreZno Dance Classic - Registry Event',
		start: '2016-05-26',
		end: '2016-05-31',
		url: 'http://freznodanceclassic.weebly.com'
	},{
		title: 'Show-Me Showdown - Registry Event',
		start: '2016-05-27',
		end: '2016-05-31',
		url: 'http://www.theshowmeshowdown.com'
	},{
		title: 'Hungarian Open - Registry Event',
		start: '2016-05-27',
		end: '2016-05-30',
		url: 'http://www.wcs-ho.com'
	},{
		title: 'Michigan Classic - Registry Event',
		start: '2016-06-02',
		end: '2016-06-06',
		url: 'http://www.MichiganClassic.com'
	},{
		title: 'Baltic Swing - Registry Event',
		start: '2016-06-03',
		end: '2016-06-06',
		url: 'http://www.balticswing.pl'
	},{
		title: 'Orange Blossom Dance Festival - Registry Event',
		start: '2016-06-10',
		end: '2016-06-13',
		url: 'http://www.orangeblossomdance.net'
	},{
		title: 'Slingshot Swing - Registry Event',
		start: '2016-06-03',
		end: '2016-06-06',
		url: 'http://www.slingshotswing.no/'
	},{
		title: 'Jack & Jill O - Registry Event',
		start: '2016-06-09',
		end: '2016-06-13',
		url: 'http://www.centralcoastswingdance.com/'
	},{
		title: 'CMJ NSW West Coast Swing Dance Championships - Registry Event',
		start: '2016-06-11',
		end: '2016-06-13',
		url: 'http://www.ceroc.com.au/events/championships/'
	},{
		title: 'Dance N Play - Registry Event',
		start: '2017-06-15',
		end: '2017-06-19',
		url: 'http://dancenplay.com'
	},{
		title: 'D-Townswing - Registry Event',
		start: '2016-06-16',
		end: '2016-06-20',
		url: 'http://d-townswing.com'
	},{
		title: 'Finnfest - Registry Event',
		start: '2016-06-16',
		end: '2016-06-21',
		url: 'http://www.rytmipolku.com/finnfest'
	},{
		title: 'Swingapalooza - Registry Event',
		start: '2016-06-17',
		end: '2016-06-20',
		url: 'http://www.swingapaloozaevent.com/'
	},{
		title: 'Colorado Country Classic - Registry Event',
		start: '2016-06-23',
		end: '2016-06-27',
		url: 'http://www.coloradocountryclassic.net/'
	},{
		title: 'Liberty Swing Championships - Registry Event',
		start: '2016-06-23',
		end: '2016-06-27',
		url: 'http://www.libertyswing.com'
	},{
		title: 'GPSDC Annual July 4th Convention - Registry Event',
		start: '2016-06-29',
		end: '2016-07-04',
		url: 'http://www.phoenixjuly4thswingconvention.com'
	},{
		title: 'Big Apple Country Dance & NY Swing Congress - Registry Event',
		start: '2016-06-30',
		end: '2016-07-04',
		url: 'http://www.bigapplecountrydance.com/'
	},{
		title: 'Ft. Lauderdale Swing & Shag Beach Bash - Registry Event',
		start: '2016-06-30',
		end: '2016-07-05',
		url: 'http://flssbb.net'
	},{
		title: 'Wild Wild Westie - Registry Event',
		start: '2016-06-30',
		end: '2016-07-04',
		url: 'http://www.wildwildwestie.com'
	},{
		title: 'Portland Dance Festival - Registry Event',
		start: '2016-07-08',
		end: '2016-07-11',
		url: 'http://www.portlanddancefestival.com'
	},{
		title: 'Florida Dance Magic - Registry Event',
		start: '2016-07-14',
		end: '2016-07-18',
		url: 'http://www.floridadancemagic.com'
	},{
		title: 'SinCity Swing - Registry Event',
		start: '2016-07-14',
		end: '2016-07-19',
		url: 'http://www.scswing.com/'
	},{
		title: 'Toronto Open Swing/Hustle Championships - Registry Event',
		start: '2016-07-14',
		end: '2016-07-19',
		url: 'http://www.toshc.com/'
	},{
		title: 'New Orleans Dance Mardi Gras - Registry Event',
		start: '2016-07-21',
		end: '2016-07-25',
		url: 'http://www.dancemardigras.com'
	},{
		title: 'Swingtime in the Rockies - Registry Event',
		start: '2016-07-21',
		end: '2016-07-25',
		url: 'http://www.swingtimeintherockies.com/'
	},{
		title: 'Rock The Barn - Registry Event',
		start: '2016-07-21',
		end: '2016-07-25',
		url: 'http://wcsumea.se/rock-the-barn/index.html'
	},{
		title: 'Sea Sun & Swing Camp - Registry Event',
		start: '2016-07-29',
		end: '2016-08-02',
		url: 'http://www.seasunswing.net/'
	},{
		title: 'Swingtacular: The Galactic Open - Registry Event',
		start: '2016-08-05',
		end: '2016-08-08',
		url: 'http://www.dancegeekproductions.com/'
	},{
		title: 'Swing Fling - Registry Event',
		start: '2016-08-11',
		end: '2016-08-15',
		url: 'http://www.swingfling.com/'
	},{
		title: 'Palm Springs Summer Dance Camp Classic - Registry Event',
		start: '2017-07-27',
		end: '2017-07-31',
		url: 'http://www.peoplewhodance.net/'
	},{
		title: 'LoneStar Invitational - Registry Event',
		start: '2016-08-12',
		end: '2016-08-17',
		url: 'http://www.lonestarcountrydance.com/'
	},{
		title: 'Swingmasters at World Dance masters - Registry Event',
		start: '2016-08-12',
		end: '2016-08-16',
		url: 'http://worlddancemasters.com'
	},{
		title: 'Chicagoland Country & Swing Dance Festival - Registry Event',
		start: '2016-08-19',
		end: '2016-08-22',
		url: 'http://www.chicagolanddancefestival.com'
	},{
		title: 'Summer Hummer - Registry Event',
		start: '2016-08-25',
		end: '2016-08-29',
		url: 'http://www.dancepros.net/'
	},{
		title: 'Midwest Westie Fest - Registry Event',
		start: '2016-08-05',
		end: '2016-08-08',
		url: 'http://www.midwestwestiefest.com/'
	},{
		title: 'Sunny Side Dance Camp - Registry Event',
		start: '2016-09-04',
		end: '2016-09-12',
		url: 'http://www.improteam.com/'
	},{
		title: 'Dallas D.A.N.C.E. - Registry Event',
		start: '2016-09-01',
		end: '2016-09-05',
		url: 'http://www.dallasdance.com/'
	},{
		title: 'South Bay Dance Fling - Registry Event',
		start: '2016-09-01',
		end: '2016-09-06',
		url: 'http://www.southbaydancefling.com'
	},{
		title: 'Desert City Swing - Registry Event',
		start: '2016-09-01',
		end: '2016-09-05',
		url: 'http://www.desertcityswing.com'
	},{
		title: 'River City Swing - Registry Event',
		start: '2016-09-01',
		end: '2016-09-05',
		url: 'http://www.rivercityswing.com/'
	},{
		title: 'Upstate Dance Challenge - Registry Event',
		start: '2016-09-09',
		end: '2016-09-12',
		url: 'http://www.vermontswingdancechampionships.com'
	},{
		title: 'Swing Trilogy - Registry Event',
		start: '2016-09-08',
		end: '2016-09-12',
		url: 'http://www.swingtrilogy.com'
	},{
		title: 'Bavarian Open WCS - Registry Event',
		start: '2016-09-09',
		end: '2016-09-13',
		url: 'http://bavarianopen.com/'
	},{
		title: 'Best of the Best - Registry Event',
		start: '2016-09-01',
		end: '2016-09-02',
		url: 'http://www.bestofthebestwcs.com/'
	},{
		title: 'BridgeTown Swing - Registry Event',
		start: '2016-09-15',
		end: '2016-09-19',
		url: 'http://www.portlandswing.org/bts'
	},{
		title: 'The After Party - Registry Event',
		start: '2017-11-30',
		end: '2017-12-04',
		url: 'http://www.tapwcs.com'
	},{
		title: 'Winter White WCS - Registry Event',
		start: '2016-12-02',
		end: '2016-12-05',
		url: 'http://www.winterwhitewcs.com'
	},{
		title: 'New Year\'s Swing Fling - Registry Event',
		start: '2016-12-29',
		end: '2017-01-03',
		url: 'http://www.nyswingfling.co.uk'
	},{
		title: 'Palm Springs New Year - Registry Event',
		start: '2016-12-29',
		end: '2017-01-03',
		url: 'http://peoplewhodance.net/'
	},{
		title: 'DC Swing Experience (DCSX) - Registry Event',
		start: '2016-11-16',
		end: '2016-11-21',
		url: 'http://www.dcswingexperience.com'
	},{
		title: 'FloorPlay New Years Swing Vacation - Registry Event',
		start: '2016-12-29',
		end: '2017-01-02',
		url: 'http://floorplayswing.com'
	},{
		title: 'Spotlight Dance Celebration - Registry Event',
		start: '2016-12-30',
		end: '2017-01-03',
		url: 'http://spotlightnewyears.com'
	},{
		title: 'Scotland Swing Classic - Non-Registry',
		start: '2016-05-13',
		end: '2016-05-16',
		url: 'http://scotlandswingclassic.com'
	},{
		title: 'Tampa Bay Classic - Registry Event',
		start: '2016-08-04',
		end: '2016-08-08',
		url: 'http://tampabayclassic.com'
	},{
		title: 'Warsaw Halloween Swing - Registry Event',
		start: '2016-10-28',
		end: '2016-11-04',
		url: 'http://warsawhalloweenswing.com'
	},{
		title: 'Swedish Swing Summer Camp - Registry Event',
		start: '2016-08-19',
		end: '2016-08-22',
		url: 'http://www.wcs.dance/sssc/'
	},{
		title: 'Sweden Westie Gala - Registry Event',
		start: '2017-01-06',
		end: '2017-01-09',
		url: 'http://www.wcs.dance/swg/'
	},{
		title: 'Canadian Swing Championships (CSC) - Registry Event',
		start: '2016-05-19',
		end: '2016-05-23',
		url: 'http://canadianswingchampionships.com'
	},{
		title: 'Swing City Chicago - Registry Event',
		start: '2016-10-27',
		end: '2016-11-01',
		url: 'http://swingcitychicago.com'
	},{
		title: 'Meet Me in St. Louis Swing Dance Championships - Registry Event',
		start: '2016-09-22',
		end: '2016-09-26',
		url: 'http://www.meetmeinstlouissdc.com'
	},{
		title: 'Swingtimate - Registry Event',
		start: '2016-12-09',
		end: '2016-12-12',
		url: 'https://rawconnection.com.au/swingtimate/'
	},{
		title: 'Summer Swing Classic - Registry Event',
		start: '2016-08-01',
		end: '2016-08-05',
		url: 'http://summerswingclassic.com/'
	},{
		title: 'Westie Angels - Registry Event',
		start: '2016-11-10',
		end: '2016-11-14',
		url: 'http://www.westiesangels.com/'
	},{
		title: 'Berlin Swing Revolution - Registry Event',
		start: '2016-12-09',
		end: '2016-12-12',
		url: 'http://berlinswingrevolution.de/'
	},{
		title: 'Neverland Swing  - Registry Event',
		start: '2016-07-01',
		end: '2016-07-04',
		url: 'http://www.neverlandswing.nl/'
	},{
		title: 'Swustlicious - Registry Event',
		start: '2016-10-14',
		end: '2016-10-17',
		url: 'http://sparklage.com/swustlicious/'
	},{
		title: 'Rocky Mountain Five Dance (RM5) - Registry Event',
		start: '2016-09-16',
		end: '2016-09-19',
		url: 'http://www.rm5dance.com'
	},{
		title: 'Rocky Mountain Five Dance (RM5) - Registry Event',
		start: '2017-09-15',
		end: '2017-09-18',
		url: 'http://www.rm5dance.com'
	},{
		title: 'Italian Open West Coast Swing - Registry Event',
		start: '2016-10-14',
		end: '2016-10-17',
		url: 'http://www.westcoastswingitaly.it/en/'
	},{
		title: 'Philly Swing Classic - Registry Event',
		start: '2016-09-23',
		end: '2016-09-26',
		url: 'http://phillyswings.com'
	},{
		title: 'Boogie By The Bay    (NASDE) - Registry Event',
		start: '2016-10-06',
		end: '2016-10-10',
		url: 'http://boogiebythebay.com'
	},{
		title: 'Halloween Swingthing - Registry Event',
		start: '2016-10-27',
		end: '2016-10-31',
		url: 'http://www.centralcoastswingdance.com/halloween/halloween/'
	},{
		title: 'West Coast Swing Helsinki - Registry Event',
		start: '2016-11-04',
		end: '2016-11-07',
		url: 'http://www.westcoastswing.fi'
	},{
		title: 'Atlanta Swing Classic - Registry Event',
		start: '2016-09-29',
		end: '2016-10-03',
		url: 'http://www.atlantaswingclassic.com/'
	},{
		title: 'Sea To Sky - Seattle - Registry Event',
		start: '2016-11-03',
		end: '2016-11-08',
		url: 'http://www.seatoskydance.com/'
	},{
		title: 'Norway Westie Fest - Registry Event',
		start: '2016-09-15',
		end: '2016-09-20',
		url: 'http://www.westie-fest.com/'
	},{
		title: 'Norway Westie Fest - Registry Event',
		start: '2017-09-14',
		end: '2017-09-18',
		url: 'http://www.westie-fest.com/'
	},{
		title: 'Autumn Swing Challenge - Registry Event',
		start: '2016-11-11',
		end: '2016-11-14',
		url: 'http://www.asc-budapest.com/en/'
	},{
		title: 'Sacramento All Swing - Non-Registry',
		start: '2016-07-21',
		end: '2016-07-25',
		url: 'http://www.sacramentoallswing.com/'
	},{
		title: 'Sao Paulo Swing Dance Championships - Registry Event',
		start: '2016-07-01',
		end: '2016-07-04',
		url: 'http://www.spsd.com.br'
	},{
		title: 'Indy Dance Explosion - Registry Event',
		start: '2016-06-30',
		end: '2016-07-04',
		url: 'http://www.indydancex.com'
	},{
		title: 'Riga Summer Swing - Registry Event',
		start: '2016-08-12',
		end: '2016-08-16',
		url: 'http://rigasummerswing.com/'
	},{
		title: 'Moscow Westie Fest - Registry Event',
		start: '2016-11-03',
		end: '2016-11-07',
		url: 'http://westiefest.org/en/'
	},{
		title: 'US Open Swing Dance Championships     (NASDE) - Registry Event',
		start: '2016-11-23',
		end: '2016-11-28',
		url: 'http://usopenswing.com'
	},{
		title: 'Old Town Swing - ',
		start: '2016-09-30',
		end: '2016-10-03',
		url: 'http://oldtowndance.com/'
	},{
		title: 'Paradise Country & Swing Dance Festival - Registry Event',
		start: '2016-10-20',
		end: '2016-10-24',
		url: 'http://www.paradisecountrydancefestival.com/www.paradisecountrydancefestival.com/HOME.html'
	},{
		title: 'C.A.S.H. Bash Weekend - Registry Event',
		start: '2016-11-24',
		end: '2016-11-28',
		url: 'http://www.cashdanceclub.org'
	},{
		title: 'Arizona Dance Classic - Registry Event',
		start: '2016-07-29',
		end: '2016-08-01',
		url: 'http://www.arizonadanceclassic.com/'
	},{
		title: 'Montreal Westie Fest - Registry Event',
		start: '2017-10-13',
		end: '2017-10-16',
		url: 'http://www.montrealwestiefest.com'
	},{
		title: 'Monterey Swingfest - Registry Event',
		start: '2017-01-11',
		end: '2017-01-16',
		url: 'http://www.centralcoastswingdance.com/'
	},{
		title: 'Florida Dance Magic - Registry Event',
		start: '2017-07-13',
		end: '2017-07-17',
		url: 'http://www.floridadancemagic.com'
	},{
		title: 'Swing City Chicago - Registry Event',
		start: '2017-10-27',
		end: '2017-10-31',
		url: 'http://swingcitychicago.com'
	},{
		title: 'Rose City Swing - Registry Event',
		start: '2017-02-23',
		end: '2017-02-27',
		url: 'http://www.rosecityswingevents.com'
	},{
		title: 'Scandinavian Open WCS - Registry Event',
		start: '2016-11-03',
		end: '2016-11-07',
		url: 'http://www.snowcs.se'
	},{
		title: 'Scandinavian Open WCS - Registry Event',
		start: '2017-10-20',
		end: '2017-10-23',
		url: 'http://www.snowcs.se'
	},{
		title: 'Dutch Open West Coast Swing - Registry Event',
		start: '2017-03-16',
		end: '2017-03-20',
		url: 'http://www.dutchopenwcs.com'
	},{
		title: 'West Coast Swing BudaFest - Registry Event',
		start: '2017-01-06',
		end: '2017-01-09',
		url: 'http://www.wcs-budafest.com'
	},{
		title: 'Hungarian Open - Registry Event',
		start: '2017-05-26',
		end: '2017-05-29',
		url: 'http://www.wcs-ho.com'
	},{
		title: 'Swing & Snow - Registry Event',
		start: '2017-02-02',
		end: '2017-02-06',
		url: 'http://swingandsnow.ru'
	},{
		title: 'Swingtime in the Rockies   (NASDE) - Registry Event',
		start: '2017-07-27',
		end: '2017-07-31',
		url: 'http://www.swingtimeintherockies.com/'
	},{
		title: 'Moscow Xmas Swing Dance Camp - Registry Event',
		start: '2017-01-03',
		end: '2017-01-09',
		url: 'http://www.mxdc.ru/en'
	},{
		title: 'Moscow Westie Fest - Registry Event',
		start: '2017-11-02',
		end: '2017-11-06',
		url: 'http://westiefest.org/en/'
	},{
		title: 'Ft. Lauderdale Swing & Shag Beach Bash - Registry Event',
		start: '2017-06-29',
		end: '2017-07-04',
		url: 'http://flssbb.net'
	},{
		title: 'New Orleans Dance Mardi Gras - Registry Event',
		start: '2017-07-20',
		end: '2017-07-24',
		url: 'http://www.dancemardigras.com'
	},{
		title: 'New England Dance Festival - Registry Event',
		start: '2016-08-11',
		end: '2016-08-15',
		url: 'http://www.nedancefestival.com/'
	},{
		title: 'Mountain Magic Dance Convention - Registry Event',
		start: '2016-11-03',
		end: '2016-11-07',
		url: 'http://www.michelledance.com/mmm.html'
	},{
		title: 'New Year’s Dance Extravaganza - Registry Event',
		start: '2016-12-29',
		end: '2017-01-02',
		url: 'http://dancepros.net/new-years-dance-extravaganza/'
	},{
		title: 'River City Swing - Registry Event',
		start: '2017-08-31',
		end: '2017-09-04',
		url: 'http://www.rivercityswing.com/'
	},{
		title: 'Liberty Swing Championships      (NASDE) - Registry Event',
		start: '2017-06-29',
		end: '2017-07-03',
		url: 'http://www.libertyswing.com'
	},{
		title: 'Capital Swing Dance Presidents Day (NASDE) - Registry Event',
		start: '2017-02-16',
		end: '2017-02-20',
		url: 'http://www.capitalswingconvention.com'
	},{
		title: 'D-Townswing - Registry Event',
		start: '2017-06-15',
		end: '2017-06-19',
		url: 'http://d-townswing.com'
	},{
		title: 'Derby City Swing - Registry Event',
		start: '2018-01-25',
		end: '2018-01-29',
		url: 'http://www.DerbyCitySwing.com'
	},{
		title: 'Charlotte Westie Fest - Registry Event',
		start: '2018-02-01',
		end: '2018-02-06',
		url: 'http://www.charlottewestiefest.com/'
	},{
		title: 'Swingin\' New England Dance Festival - Registry Event',
		start: '2017-11-09',
		end: '2017-11-13',
		url: 'http://www.swingingnewengland.com'
	},{
		title: 'Monterey Swingfest - Registry Event',
		start: '2018-01-11',
		end: '2018-01-15',
		url: 'http://www.centralcoastswingdance.com/'
	},{
		title: 'Jack & Jill O\'Rama - Registry Event',
		start: '2017-06-08',
		end: '2017-06-13',
		url: 'http://jackandjillorama.com/'
	},{
		title: 'UCWDC Country Dance World Championships - Registry Event',
		start: '2017-01-01',
		end: '2017-01-09',
		url: 'http://www.ucwdcworlds.com'
	},{
		title: 'Austin Swing Dance Championships - Registry Event',
		start: '2018-01-12',
		end: '2018-01-16',
		url: 'http://www.austinswingdancechampionships.com'
	},{
		title: 'SwingCouver - Registry Event',
		start: '2017-01-19',
		end: '2017-01-24',
		url: 'http://www.swingcouver.com'
	},{
		title: 'Sweetheart Swing Classic - Registry Event',
		start: '2017-02-16',
		end: '2017-02-20',
		url: 'http://www.sweetheartswingclassic.com/'
	},{
		title: '5280 Swing Dance Championships - Registry Event',
		start: '2017-02-23',
		end: '2017-02-27',
		url: 'http://www.5280sdc.com'
	},{
		title: 'Holy Land Open  - On Hiatus - Registry Event - Hiatus',
		start: '2017-02-23',
		end: '2017-02-26',
		url: 'http://www.holylandopen.com'
	},{
		title: 'Dance Camp Chicago - Registry Event',
		start: '2017-02-10',
		end: '2017-02-13',
		url: 'http://www.swingncountry.net/DCC/'
	},{
		title: 'Swingtzerland - Registry Event',
		start: '2017-02-09',
		end: '2017-02-13',
		url: 'http://swingtzerland.com'
	},{
		title: 'Australian West Coast Swing and Zouk - Registry Event',
		start: '2017-02-23',
		end: '2017-02-27',
		url: 'http://rawconnection.com.au/ozwcswoukchamps/'
	},{
		title: 'Mid Atlantic Dance Jam (MADjam)      (NASDE) - Registry Event',
		start: '2017-03-02',
		end: '2017-03-06',
		url: 'http://www.atlanticdancejam.com'
	},{
		title: 'The Chicago Classic   (NASDE) - HIATUS - Registry Event - Hiatus',
		start: '2017-03-08',
		end: '2017-03-09',
		url: 'https://thechicagoclassic.com'
	},{
		title: 'High Desert Dance Classic - Registry Event',
		start: '2017-03-10',
		end: '2017-03-13',
		url: 'http://www.highdesertdanceclassic.com/'
	},{
		title: 'The Brazilian Open - Registry Event',
		start: '2017-03-15',
		end: '2017-03-16',
		url: 'http://www.thebrazilianopen.com/'
	},{
		title: 'Novice Invitational - Registry Event',
		start: '2017-03-24',
		end: '2017-03-27',
		url: 'http://www.novice-invitational.com'
	},{
		title: 'The Boston Tea Party - Registry Event',
		start: '2017-03-23',
		end: '2017-03-27',
		url: 'http://www.teapartyswings.com/'
	},{
		title: 'City of Angels Swing - Registry Event',
		start: '2017-03-30',
		end: '2017-04-03',
		url: 'http://www.cityofangelsswing.com/'
	},{
		title: 'Russian Open WCS Championship - Registry Event',
		start: '2017-03-30',
		end: '2017-04-03',
		url: 'http://improteam.com/en/ruopen/home'
	},{
		title: 'U.K. & European WCS Championships - Registry Event',
		start: '2017-04-06',
		end: '2017-04-11',
		url: 'http://www.jiveaddiction.com/event-type/west-coast-swing/uk-european-wcs-championships-2017'
	},{
		title: 'San Diego Dance Festival - Registry Event',
		start: '2017-04-13',
		end: '2017-04-17',
		url: 'http://www.sandiegodancefestival.com/'
	},{
		title: 'Tulsa Spring Swing - Registry Event',
		start: '2017-04-14',
		end: '2017-04-17',
		url: 'http://www.tulsaspringswing.com'
	},{
		title: 'Asia West Coast Swing Open - Registry Event',
		start: '2017-04-20',
		end: '2017-04-24',
		url: 'http://www.asiawcsopen.com/'
	},{
		title: 'Detonation Dance - Registry Event',
		start: '2017-04-20',
		end: '2017-04-24',
		url: 'http://www.detonationdance.com/'
	},{
		title: 'Swing Dance America - Registry Event',
		start: '2017-04-27',
		end: '2017-05-02',
		url: 'http://www.swingdanceamerica.com/'
	},{
		title: 'Nordic WCS Champ - Registry Event',
		start: '2017-04-29',
		end: '2017-05-02',
		url: 'http://www.nordicwcschamps.com/'
	},{
		title: 'French Open West Coast Swing - Registry Event',
		start: '2016-05-05',
		end: '2016-05-09',
		url: 'http://www.fowcs.com/'
	},{
		title: 'Swingin - Registry Event',
		start: '2017-05-04',
		end: '2017-05-08',
		url: 'http://www.sis.djkenm.com'
	},{
		title: 'KIWI Fest - Registry Event',
		start: '2017-05-05',
		end: '2017-05-08',
		url: 'http://'
	},{
		title: 'SOswing Convention - Registry Event',
		start: '2017-05-19',
		end: '2017-05-22',
		url: 'http://23.235.192.56/~soswin5/'
	},{
		title: 'USA Grand National Dance Championship    (NASDE) - Registry Event',
		start: '2017-05-25',
		end: '2017-05-30',
		url: 'http://usagrandnationals.com/GNDC/'
	},{
		title: 'Canadian Swing Championships (CSC) - Registry Event',
		start: '2017-05-19',
		end: '2017-05-23',
		url: 'http://canadianswingchampionships.com'
	},{
		title: 'Swingsation - Registry Event',
		start: '2017-05-19',
		end: '2017-05-22',
		url: 'http://rawconnection.com.au/swingsation/'
	},{
		title: 'FreZno Dance Classic - Registry Event',
		start: '2017-05-25',
		end: '2017-05-30',
		url: 'http://freznodanceclassic.weebly.com'
	},{
		title: 'Michigan Classic - Registry Event',
		start: '2017-06-01',
		end: '2017-06-05',
		url: 'http://michiganclassicswing.com/'
	},{
		title: 'Orange Blossom Dance Festival - Registry Event',
		start: '2017-06-01',
		end: '2017-06-05',
		url: 'http://www.orangeblossomdance.net'
	},{
		title: 'Slingshot Swing - Registry Event',
		start: '2017-06-07',
		end: '2017-06-08',
		url: 'http://www.slingshotswing.no/'
	},{
		title: 'Baltic Swing - Registry Event',
		start: '2017-06-08',
		end: '2017-06-12',
		url: 'http://www.balticswing.pl'
	},{
		title: 'CMJ NSW West Coast Swing Dance Championships - Registry Event',
		start: '2017-06-08',
		end: '2017-06-09',
		url: 'http://www.ceroc.com.au/events/championships/'
	},{
		title: 'Finnfest - Registry Event',
		start: '2017-06-15',
		end: '2017-06-20',
		url: 'http://www.rytmipolku.com/finnfest'
	},{
		title: 'Swingapalooza - Registry Event',
		start: '2017-06-16',
		end: '2017-06-19',
		url: 'http://www.swingapaloozaevent.com/'
	},{
		title: 'Colorado Country Classic - Registry Event',
		start: '2017-06-22',
		end: '2017-06-26',
		url: 'http://www.coloradocountryclassic.net/'
	},{
		title: 'Swing Over Orlando - Registry Event',
		start: '2017-03-24',
		end: '2017-03-27',
		url: 'http://www.swingoverorlando.com/'
	},{
		title: 'Big Apple Country Dance & NY Swing Congress - Registry Event',
		start: '2017-07-06',
		end: '2017-07-10',
		url: 'http://www.bigapplecountrydance.com/'
	},{
		title: 'Wild Wild Westie - Registry Event',
		start: '2017-07-06',
		end: '2017-07-10',
		url: 'http://www.wildwildwestie.com'
	},{
		title: 'GPSDC Annual July 4th Convention - Registry Event',
		start: '2017-07-06',
		end: '2017-07-10',
		url: 'http://www.phoenixjuly4thswingconvention.com'
	},{
		title: 'Neverland Swing  - Registry Event',
		start: '2017-06-30',
		end: '2017-07-04',
		url: 'http://www.neverlandswing.nl/'
	},{
		title: 'Easter Swing      (NASDE) - Registry Event',
		start: '2017-04-13',
		end: '2017-04-17',
		url: 'http://www.easterswing.org/'
	},{
		title: 'Sao Paulo Swing Dance Championships - Registry Event',
		start: '2017-07-05',
		end: '2017-07-06',
		url: 'http://www.spsd.com.br'
	},{
		title: 'Portland Dance Festival - Registry Event',
		start: '2017-07-07',
		end: '2017-07-10',
		url: 'http://www.portlanddancefestival.com'
	},{
		title: 'Toronto Open Swing/Hustle Championships - Registry Event',
		start: '2017-07-13',
		end: '2017-07-17',
		url: 'http://www.toshc.com/'
	},{
		title: 'Rock The Barn - Registry Event',
		start: '2017-07-20',
		end: '2017-07-24',
		url: 'http://wcsumea.se/rock-the-barn/index.html'
	},{
		title: 'Arizona Dance Classic - Registry Event',
		start: '2017-08-02',
		end: '2017-08-03',
		url: 'http://www.arizonadanceclassic.com/'
	},{
		title: 'Sea Sun & Swing Camp - Registry Event',
		start: '2017-07-28',
		end: '2017-08-07',
		url: 'http://www.seasunswing.net/'
	},{
		title: 'New England Dance Festival - Registry Event',
		start: '2017-08-03',
		end: '2017-08-07',
		url: 'http://www.nedancefestival.com/'
	},{
		title: 'Citadel Swing - Registry Event',
		start: '2017-09-22',
		end: '2017-09-25',
		url: 'http://www.citadelswing.ro/'
	},{
		title: 'Trilogy Swing - Registry Event',
		start: '2017-09-07',
		end: '2017-09-11',
		url: 'http://www.swingtrilogy.com'
	},{
		title: 'Swingtacular: The Galactic Open - Registry Event',
		start: '2017-08-04',
		end: '2017-08-07',
		url: 'http://www.dancegeekproductions.com/'
	},{
		title: 'Midwest Westie Fest - Registry Event',
		start: '2017-08-03',
		end: '2017-08-07',
		url: 'http://www.midwestwestiefest.com/'
	},{
		title: 'Swing Fling - Registry Event',
		start: '2017-08-10',
		end: '2017-08-14',
		url: 'http://www.swingfling.com/'
	},{
		title: 'LoneStar Invitational - Registry Event',
		start: '2017-08-11',
		end: '2017-08-14',
		url: 'http://www.lonestarcountrydance.com/'
	},{
		title: 'Rija Summer Swing - Registry Event',
		start: '2017-08-10',
		end: '2017-08-15',
		url: 'http://rigasummerswing.com/#home'
	},{
		title: 'Chicagoland Country & Swing Dance Festival - Registry Event',
		start: '2017-08-18',
		end: '2017-08-21',
		url: 'http://www.chicagolanddancefestival.com'
	},{
		title: 'Swedish Swing Summer Camp - Registry Event',
		start: '2017-08-18',
		end: '2017-08-21',
		url: 'http://www.wcs.dance/sssc/'
	},{
		title: 'Summer Hummer    (NASDE) - Registry Event',
		start: '2017-08-23',
		end: '2017-08-24',
		url: 'http://www.dancepros.net/'
	},{
		title: 'Desert City Swing - Registry Event',
		start: '2017-08-31',
		end: '2017-09-05',
		url: 'http://www.desertcityswing.com'
	},{
		title: 'South Bay Dance Fling - Registry Event',
		start: '2017-08-31',
		end: '2017-09-05',
		url: 'http://www.southbaydancefling.com'
	},{
		title: 'Dallas D.A.N.C.E. - Registry Event',
		start: '2017-09-01',
		end: '2017-09-04',
		url: 'http://www.dallasdance.com/'
	},{
		title: 'Sunny Side Dance Camp - Registry Event',
		start: '2017-09-03',
		end: '2017-09-11',
		url: 'http://www.improteam.com/'
	},{
		title: 'Bavarian Open WCS - Registry Event',
		start: '2017-09-07',
		end: '2017-09-11',
		url: 'http://bavarianopen.com/'
	},{
		title: 'Best of the Best - Registry Event',
		start: '2017-09-14',
		end: '2017-09-18',
		url: 'http://www.bestofthebestwcs.com/'
	},{
		title: 'Upstate Dance Challenge - Registry Event',
		start: '2017-09-07',
		end: '2017-09-11',
		url: 'http://www.upstatedancechallenge.com'
	},{
		title: 'BridgeTown Swing - Registry Event',
		start: '2017-09-21',
		end: '2017-09-25',
		url: 'http://www.portlandswing.org/bts'
	},{
		title: 'Meet Me in St. Louis Swing Dance Championships - Registry Event',
		start: '2017-09-21',
		end: '2017-09-25',
		url: 'http://www.meetmeinstlouissdc.com'
	},{
		title: 'Philly Swing Classic - Registry Event',
		start: '2017-09-22',
		end: '2017-09-25',
		url: 'http://phillyswings.com'
	},{
		title: 'Atlanta Swing Classic - Registry Event',
		start: '2017-09-29',
		end: '2017-10-02',
		url: 'http://www.atlantaswingclassic.com/'
	},{
		title: 'Midland Swing Open - Registry Event',
		start: '2017-09-29',
		end: '2017-10-02',
		url: 'http://www.midlandswingopen.com'
	},{
		title: 'Paris Westie Fest - Registry Event',
		start: '2017-01-20',
		end: '2017-01-23',
		url: 'http://pariswestiefest.com/?lang=en'
	},{
		title: 'French Open West Coast Swing - Registry Event',
		start: '2017-05-25',
		end: '2017-05-29',
		url: 'http://www.fowcs.com/'
	},{
		title: 'The Texas Classic - Registry Event',
		start: '2016-05-19',
		end: '2016-05-23',
		url: 'http://www.thetexasclassic.com/'
	},{
		title: 'London SWINGvitational (On Hiatus) - Registry Event - Hiatus',
		start: '2016-11-18',
		end: '2016-11-20',
		url: 'http://www.danzea.com/west-coast-swing/congresses-west-coast-swing/london-swingvitational-2015'
	},{
		title: 'Palm Springs Summer Dance Camp Classic - Registry Event',
		start: '2016-08-11',
		end: '2016-08-15',
		url: 'http://www.peoplewhodance.net/'
	},{
		title: 'Palm Springs New Year - Registry Event',
		start: '2017-12-28',
		end: '2018-01-02',
		url: 'http://peoplewhodance.net/'
	},{
		title: 'Sea To Sky - Seattle - Registry Event',
		start: '2017-11-09',
		end: '2017-11-14',
		url: 'http://www.seatoskydance.com/'
	},{
		title: 'Anchor Festival - Registry Event',
		start: '2017-03-30',
		end: '2017-04-03',
		url: 'http://anchor-festival.com'
	},{
		title: 'Austrian WCS Spectacle - Registry Event',
		start: '2017-03-24',
		end: '2017-03-27',
		url: 'http://www.wcs-spectacle.at'
	},{
		title: 'Old Town Swing - Registry Event',
		start: '2017-09-29',
		end: '2017-10-02',
		url: 'http://oldtowndance.com/'
	},{
		title: 'Sacramento All Swing - Registry Event',
		start: '2017-07-20',
		end: '2017-07-24',
		url: 'http://www.sacramentoallswing.com/'
	},{
		title: 'Scotland Swing Classic - Registry Event',
		start: '2017-05-05',
		end: '2017-05-08',
		url: 'http://scotlandswingclassic.com'
	},{
		title: 'Winter White WCS - Registry Event',
		start: '2017-12-01',
		end: '2017-12-04',
		url: 'http://www.winterwhitewcs.com'
	},{
		title: 'Korea Westival - Registry Event',
		start: '2017-06-23',
		end: '2017-06-26',
		url: 'http://www.koreawestival.com'
	},{
		title: 'London SWINGvitational  - Registry Event',
		start: '2017-11-16',
		end: '2017-11-21',
		url: 'http://www.londonswingvitational.co.uk'
	},{
		title: 'New Zealand Open Swing Dance Championships - Registry Event',
		start: '2016-10-14',
		end: '2016-10-17',
		url: 'www.nzoswing.com#http://www.nzoswing.com#'
	},{
		title: 'New Zealand Open Swing Dance Championships - Registry Event',
		start: '2017-06-30',
		end: '2017-07-03',
		url: 'http://www.thenzopen.co.nz'
	},{
		title: 'Swustlicious - Registry Event',
		start: '2017-10-20',
		end: '2017-10-23',
		url: 'http://sparklage.com/swustlicious/'
	},{
		title: 'The Texas Classic - Registry Event',
		start: '2017-05-18',
		end: '2017-05-22',
		url: 'http://www.thetexasclassic.com/'
	},{
		title: 'German Open WCS Championships - Registry Event',
		start: '2017-08-10',
		end: '2017-08-14',
		url: 'https://go-wcs.com'
	},{
		title: 'Boogie By The Bay    (NASDE) - Registry Event',
		start: '2017-10-05',
		end: '2017-10-09',
		url: 'http://boogiebythebay.com'
	},{
		title: 'West In Lyon - Registry Event',
		start: '2017-03-09',
		end: '2017-03-13',
		url: 'http://www.westinlyon.com/'
	},{
		title: 'Show-Me Showdown - Registry Event',
		start: '2017-05-26',
		end: '2017-05-31',
		url: 'http://www.theshowmeshowdown.com'
	},{
		title: 'Indy Dance Explosion - Registry Event',
		start: '2017-06-30',
		end: '2017-07-04',
		url: 'http://www.indydancex.com'
	},{
		title: 'Swing It Like It\'s Hot - Registry Event',
		start: '2017-07-21',
		end: '2017-07-24',
		url: 'http://www.swingithot.com'
	},{
		title: 'Italian Open West Coast Swing - Registry Event',
		start: '2017-10-13',
		end: '2017-10-16',
		url: 'http://www.westcoastswingitaly.it/en/'
	},{
		title: 'WSDC test one - Training Multi-day',
		start: '2017-12-26',
		end: '2018-02-15',
		url: 'http://swingdancecouncil.com',color: '#339933', textColor: '#ffffff', borderColor: '#339933'
	},{
		title: 'Mountain Magic Dance Convention - Registry Event',
		start: '2017-11-02',
		end: '2017-11-06',
		url: 'http://www.michelledance.com/mmm.html'
	},{
		title: 'US Open Swing Dance Championships     (NASDE) - Registry Event',
		start: '2017-11-23',
		end: '2017-11-27',
		url: 'http://usopenswing.com'
	},{
		title: 'Paradise Country & Swing Dance Festival - Registry Event',
		start: '2017-10-19',
		end: '2017-10-23',
		url: 'http://www.paradisecountrydancefestival.com/www.paradisecountrydancefestival.com/HOME.html'
	},{
		title: 'Halloween Swingthing - Registry Event',
		start: '2017-10-26',
		end: '2017-10-30',
		url: 'http://www.halloweenswingthing.com/'
	},{
		title: 'SwingDiego (The Superbowl of Swing) - Registry Event',
		start: '2017-05-04',
		end: '2017-05-08',
		url: 'http://www.swingdiego.com/'
	},{
		title: 'Tampa Bay Classic (NASDE) - Registry Event',
		start: '2017-08-03',
		end: '2017-08-07',
		url: 'http://tampabayclassic.com'
	},{
		title: 'American  Dance Camp - Non-Registry',
		start: '2017-06-28',
		end: '2017-07-03',
		url: 'http://www.americanodance.ru'
	},{
		title: 'European Swing Challenge - Non-Registry',
		start: '2017-10-20',
		end: '2017-10-24',
		url: 'http://www.jiveaddiction.com/event-type/west-coast-swing/uk-european-wcs-championships-2017'
	},{
		title: 'Swing & Snow - Registry Event',
		start: '2016-07-13',
		end: '2016-07-17',
		url: 'http://wcsnights.ru'
	},{
		title: 'Swing Open Kazan - Registry Event',
		start: '2017-06-09',
		end: '2017-06-13',
		url: 'https://vk.com/event137657917'
	},{
		title: 'The After Party - Registry Event',
		start: '2016-12-01',
		end: '2016-12-05',
		url: 'http://www.tapwcs.com'
	},{
		title: 'Montreal Westie Fest - Registry Event',
		start: '2016-10-14',
		end: '2016-10-17',
		url: 'http://www.montrealwestiefest.com'
	},{
		title: 'Swing & Snow - Registry Event',
		start: '2018-02-01',
		end: '2018-02-05',
		url: 'http://swingandsnow.ru'
	},{
		title: 'Charlotte Westie Fest - Registry Event',
		start: '2017-02-02',
		end: '2017-02-06',
		url: 'http://www.charlottewestiefest.com/'
	},{
		title: 'Derby City Swing - Registry Event',
		start: '2017-01-26',
		end: '2017-01-30',
		url: 'http://www.DerbyCitySwing.com'
	},{
		title: 'Austin Swing Dance Championships - Registry Event',
		start: '2017-01-12',
		end: '2017-01-16',
		url: 'http://www.austinswingdancechampionships.com'
	},{
		title: 'Swing Escape - Registry Event',
		start: '2017-03-17',
		end: '2017-03-20',
		url: 'http://www.dancevibe.com.au/2016/07/swing-escape-2017-2/'
	},{
		title: 'DC Swing Experience (DCSX) - Registry Event',
		start: '2017-11-16',
		end: '2017-11-20',
		url: 'http://www.dcswingexperience.com'
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
