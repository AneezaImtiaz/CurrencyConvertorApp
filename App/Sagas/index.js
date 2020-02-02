import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { CurrencyRateTypes } from '../Redux/CurrencyRedux'


/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getCurrencyRate } from './CurrencySagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
	yield takeLatest(CurrencyRateTypes.GET_CURRENCY_RATE_REQUEST, getCurrencyRate, api),
    
    // some sagas only receive an action
    yield takeLatest(StartupTypes.STARTUP, startup)
 
  ])
}
