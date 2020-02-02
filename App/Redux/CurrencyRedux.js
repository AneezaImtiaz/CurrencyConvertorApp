import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getCurrencyRateRequest: ['currency'],
  getCurrencyRateSuccess: ['payload'],
  getCurrencyRateFailure: ['errorMsg']
})

export const CurrencyRateTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  results: [],
  fetching: null,
  error: null,
  errorMsg: ''
})

/* ------------- Reducers ------------- */

export const getCurrencyRateRequest = (state, { data }) => {
  return state.merge({fetching: true, data, results: []})
}

export const getCurrencyRateSuccess = (state, action) => {
  const {payload} = action

  return state.merge({ fetching: false,
    results: payload,
    error: null
  })
}

// Something went wrong somewhere.
export const getCurrencyRateFailure = (state, {errorMsg}) => {
	debugger
  return state.merge({ fetching: false, error: true, errorMsg, payload: null })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CURRENCY_RATE_REQUEST]: getCurrencyRateRequest,
  [Types.GET_CURRENCY_RATE_SUCCESS]: getCurrencyRateSuccess,
  [Types.GET_CURRENCY_RATE_FAILURE]: getCurrencyRateFailure
})
