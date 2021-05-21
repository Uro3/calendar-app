import { createStore, combineReducers } from 'redux';
import { calendarReducer } from './modules/calendar';
import { scheduleReducer } from './modules/schedule';

const rootReducer = combineReducers({
  calendar: calendarReducer,
  schedule: scheduleReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
