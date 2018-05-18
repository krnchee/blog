import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // mapKeys is a lodash function that converts an array of objects
      // to a single objects. The first arg is the array and the second
      // arg is the prop you want to be the key for each obj. 
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
