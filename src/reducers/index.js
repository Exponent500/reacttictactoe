import { combineReducers } from 'redux';
import DevlandiaModeReducer from './reducer_devlandiaMode';

const rootReducer = combineReducers({
    devlandiaMode: DevlandiaModeReducer
});
  
export default rootReducer;
