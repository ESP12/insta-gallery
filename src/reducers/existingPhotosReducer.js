import _ from 'lodash';

import {
	ADD_TO_PERSONAL_LIST,
	REMOVE_FROM_PERSONAL_LIST,
	FETCH_PHOTOS,

} from '../actions/types';


export default (state = {}, action) => {
	switch(action.type){
		case ADD_TO_PERSONAL_LIST: 
			return {...state, [action.payload.id] : action.payload}
		case FETCH_PHOTOS:
			return {...state,..._.mapKeys(action.payload,'id')}
		default:
			return state;
	}
}