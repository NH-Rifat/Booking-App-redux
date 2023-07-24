import { BOOKING_REQUEST_SUBMIT, DELETE_BOOKING } from "./actionTypes";

const initialState = {
  bookings: [],
};

function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case BOOKING_REQUEST_SUBMIT:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case DELETE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter((booking, i) => i !== action.payload),
      };
    default:
      return state;
  }
}

export default bookingReducer;
