import { DECREMENT, INCREMENT, RESET } from '../constants';

const initialState = 10;

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return 0;
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;

// let obj = {
//   type: 'INCREMENT',
// };

// let obj = {
//   type: 'DECREMENT',
// };

// let obj = {
//   type: 'RESET',
// };

// function counter(state = [], action) {
//   switch (action.type) {
//     case 'RESET':
//       return 0;
//     case 'ADD':
//       return [...state, action.data];
//     case 'DECREMENT':
//     default:
//       return state;
//   }
// }
