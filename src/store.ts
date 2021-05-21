import { createStore, combineReducers } from 'redux';
import { calendarReducer } from './modules/calendar';
import { scheduleReducer } from './modules/schedule';
import { scheduleDialogReducer } from './modules/scheduleDialog';

const rootReducer = combineReducers({
  calendar: calendarReducer,
  schedule: scheduleReducer,
  scheduleDialog: scheduleDialogReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
