import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import timesheetReducer from './timesheetReducer.reducer';
import timesheetFormReducer from './timesheetFormReducer.reducer';
import timesheetFormUpdateReducer from './timesheetFormUpdateReducer.reducer';
import clientInfoReducer from './clientInfoReducer.reducer';
import timesheetClientTimesheetReducer from './timesheetClientTimesheetReducer.reducer';
import timesheetClientReducer from './timesheetClientReducer.reducer';
import timesheetClientUpdateFormTimesheetReducer from './timesheetClientUpdateFormTimesheetReducer.reducer';
import specificClientReducer from './specificClientReducer.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  timesheetReducer,
  timesheetFormReducer,
  timesheetFormUpdateReducer,
  clientInfoReducer,
  timesheetClientTimesheetReducer,
  timesheetClientReducer,
  timesheetClientUpdateFormTimesheetReducer,
  specificClientReducer,
});

export default rootReducer;
