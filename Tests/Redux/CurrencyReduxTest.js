import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/CurrencyRedux'

// test case for currency request
test('request', () => {
  const currency = 'PKR'
  const state = reducer(INITIAL_STATE, Actions.getCurrencyRateRequest(currency))

  expect(state.fetching).toBe(true)
  expect(state.results).toHaveLength(0)
  expect(state.error).toBeNull()
  expect(state.errorMsg).toBe("")
})

// test case for currency success
test('success', () => {
  const currency = 'PKR'
  const state = reducer(INITIAL_STATE, Actions.getCurrencyRateSuccess(currency))

  expect(state.fetching).toBe(false)
  expect(state.results).toBeDefined()
  expect(state.error).toBeNull()
  expect(state.errorMsg).toBe("")
})

// test case for currency failure
test('failure', () => {
  const errorMessage = 'Something went wrong'
  const state = reducer(INITIAL_STATE, Actions.getCurrencyRateFailure(errorMessage))

  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
  expect(state.errorMsg).toBe(errorMessage)
  expect(state.results).toHaveLength(0)
})
