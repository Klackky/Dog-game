// import * as request from 'superagent';
// export const SET_DOGS2 = 'SET_DOGS2';

// export function setDog2(dogs) {
//   return {
//     type: SET_DOGS2,
//     payload:dogs.map(dog => {
//      return {
//       url: dog,
//       breed: dog.split('breeds/').pop().split('/')[0],
//       number: Math.floor(Math.random() * 2 + 1)
//      } 
//     })
// }
// }

// export function getDogs2() {
//   console.log('getDogs test!')
//   return function (dispatch) {
//     request('https://dog.ceo/api/breeds/image/random/1')
//       .then(response => {
//         console.log('response test:', response)
//         const dogSetter2 = setDog2(response.body.message)
//         console.log('dogSetter test:', dogSetter2)
//         dispatch(dogSetter2)
//       })
//   }
// }



