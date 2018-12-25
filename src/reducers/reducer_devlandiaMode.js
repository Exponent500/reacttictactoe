import { SET_MODE } from '../actions';

export default function(state = false, action) {
    switch(action.type) {
        case SET_MODE:
            return action.payload;
        default:
            return state;
    }
}