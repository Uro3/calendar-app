import { createStore, combineReducers, compose } from 'redux';
import { calendarReducer } from './modules/calendar';
import { calendarScheduleReducer } from './modules/calendarSchedule';
import { scheduleDialogReducer } from './modules/scheduleDialog';

// https://qiita.com/AshSuzuki/items/111d5a7c5d30fd1123c3
interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;
// eslint-disable-next-line
const composeReduxDevToolsEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  calendar: calendarReducer,
  calendarSchedule: calendarScheduleReducer,
  scheduleDialog: scheduleDialogReducer
});

const store = createStore(
  rootReducer,
  composeReduxDevToolsEnhancers()
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
