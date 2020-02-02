const mode = {
  production: 'http://192.168.15.223:3000/' // Change with your IP Address 
}

export const baseURL = mode.production
export const apiURL = 'currency/'

const urlPaths = {

  //Currency Rate
  currencyRate : baseURL + apiURL + 'getRate/',

}

export default urlPaths
