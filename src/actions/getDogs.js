import * as request from 'superagent';
export const SET_DOGS = 'SET_DOGS';

export function setDog(dog) {
  console.log('getDogs setDog dog test:', dog);
  return {
    type: SET_DOGS,
    payload: {
      url: dog,
      breed: dog.split('breeds/').pop().split('/')[0]
    }
  }
}


export function getDogs() {
  console.log('getDogs test!')
  return function (dispatch) {
    request('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        console.log('response test:', response)
        const dogSetter = setDog(response.body.message)
        console.log('dogSetter test:', dogSetter)
        dispatch(dogSetter)
      })
  }
}


// export const getDogs = title => dispatch => {
//   request
//     .post('https://dog.ceo/api/breeds/image/random')
//     .send({ title })
//     .then(response => response.body.message)
//     .then(res => console.log(res))
//     .then(response => dispatch(setDog(response.body.message)))
// }