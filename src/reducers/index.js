import {combineReducers} from 'redux';
import tasksTracker from './tasksTracker';
import _filters from './filters';

export default combineReducers({
  tasks: tasksTracker,
  filter: _filters,
});
