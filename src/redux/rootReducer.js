import bookingReducer from "./booking/bookingReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  bookings: bookingReducer,
});

export default rootReducer;
