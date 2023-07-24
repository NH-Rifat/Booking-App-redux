import { BOOKING_REQUEST_SUBMIT, DELETE_BOOKING } from "./actionTypes";

export const bookingRequestSubmit = (payload) => ({
  type: BOOKING_REQUEST_SUBMIT,
  payload,
});

export const deleteBooking = (payload) => ({
  type: DELETE_BOOKING,
  payload,
});
