import { call, put } from 'redux-saga/effects'
import CurrencyActions from '../Redux/CurrencyRedux'
import { Messages } from '../Helpers/AppConstants'
const { apiProblemCodes } = Messages

export function * getCurrencyRate (api, action) {
 debugger
  const {currency} = action
  const response = yield call(api.getCurrencyRate, currency)

  if (response.ok) {
    yield put(CurrencyActions.getCurrencyRateSuccess(response.data))
  } else if (response.problem !== 'CLIENT_ERROR') {
    yield put(CurrencyActions.getCurrencyRateFailure(apiProblemCodes[response.problem]))
  } else {
    yield put(CurrencyActions.getCurrencyRateFailure(response.error))
  }

}
