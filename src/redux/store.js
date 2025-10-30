import { createStore } from 'redux';
import taskReducer from './reducer';

// Crea el store con el reducer de tareas
const store = createStore(taskReducer);

export default store;