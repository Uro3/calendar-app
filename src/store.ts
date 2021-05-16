import { createStore, combineReducers } from 'redux';
import { calendarReducer } from './modules/calendar';

const rootReducer = combineReducers({
  calendar: calendarReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
