import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // The reason we have ...state in the return is because even though
      // we are going to the posts show page we still want to keep all the
      // previous state with us. If we don't we will loose all the other posts
      // from the state.
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      // mapKeys is a lodash function that converts an array of objects
      // to a single objects. The first arg is the array and the second
      // arg is the prop you want to be the key for each obj.
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
