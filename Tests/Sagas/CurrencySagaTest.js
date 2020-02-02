import API from '../../App/Services/Api'
import { put, call } from 'redux-saga/effects'
import { getCurrencyRate } from '../../App/Sagas/CurrencySagas'
import CurrencyActions from '../../App/Redux/CurrencyRedux'
const api = API.create()

const stepper = (fn) => (mock) => fn.next(mock).value

test('first calls API', () => {
  const step = stepper(getCurrencyRate(api, {currency: 'PKR'}))
  // first yield is API
  expect(step()).toEqual(call(api.getCurrencyRate, 'PKR'))
})

test('success path', () => {
  const response = {ok: true}
  console.log('Successs   ', response)
  const step = stepper(getCurrencyRate(api, {currency: 'PKR'}))
  // first step API
  step()
  // Second step successful return
  const stepResponse = step(response)

let data = response.data
  expect(stepResponse).toEqual(put(CurrencyActions.getCurrencyRateSuccess(data)))
})

test('failure path', () => {
  const response = {ok: false}
  const step = stepper(getCurrencyRate(api, {currency: 'PKR'}))
  // first step API
  step()
  // Second step failed response
  expect(step(response)).toEqual(put(CurrencyActions.getCurrencyRateFailure(response.error)))
})
