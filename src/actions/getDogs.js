import * as request from 'superagent';
export const SET_DOGS = 'SET_DOGS';

export function setDog(dogs) {
  return {
    type: SET_DOGS,
    payload:dogs.map(dog => {
     return {
      url: dog,
      breed: dog.split('breeds/').pop().split('/')[0],
      number: Math.floor(Math.random() * 2 + 1)
     } 
    })
}
}


export function getDogs() {
  console.log('getDogs test!')
  return function (dispatch) {
    request('https://dog.ceo/api/breeds/image/random/6')
      .then(response => {
        console.log('response test:', response)
        const dogSetter = setDog(response.body.message)
        console.log('dogSetter test:', dogSetter)
        dispatch(dogSetter)
      })
  }
}
