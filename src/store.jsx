import { createStore } from 'redux';
import { allDatas } from './Reducers/Reducer';
 // Import your root reducer

const store = createStore(allDatas);
export default store;