// process STARTUP actions
export function * startup (action) {
  if (__DEV__ && console.tron) {

    // fully customized!
    const subObject = { a: 1, b: [1, 2, 3], c: true }
    subObject.circularDependency = subObject 
    console.tron.display({
      name: 'Currency Convertor',
      value: {
        welcome: 'Welcome to the our App!',
        subObject,
        someInlineFunction: () => true,
        someGeneratorFunction: startup
      }
    })
  }
}
