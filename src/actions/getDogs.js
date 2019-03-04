import * as request from 'superagent';
const SET_DOG = 'SET_DOG';

export function setDog(dog) {
  return {
    type: SET_DOG,
    payload: dog
  }
}


// export function getAlbums() {
//   return function (dispatch) {
//     request('https://dog.ceo/api/breeds/image/random')
//       .then(response => {
//         console.log(response);
//       //  dispatch(setDog(response.body))
//       })
//   }
// }
