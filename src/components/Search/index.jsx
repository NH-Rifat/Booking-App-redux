/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import Bookings from "../Bookings";
import { useDispatch, useSelector } from "react-redux";
import {
  bookingRequestSubmit,
  deleteBooking,
} from "../../redux/booking/actions";

const Search = () => {
  const bookingsData = useSelector((state) => state.bookings.bookings);
  console.log(bookingsData);

  const dispatch = useDispatch();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [classType, setClassType] = useState("");

  const addBooking = () => {
    const newBooking = {
      from,
      to,
      date,
      guests,
      classType,
    };
    dispatch(bookingRequestSubmit(newBooking));
    // Clear the input fields after adding a booking
    setFrom("");
    setTo("");
    setDate("");
    setGuests("");
    setClassType("");
  };

  const bookingDelete = (index) => {
    console.log({ index });
    dispatch(deleteBooking(index));
  };

  return (
    <section>
      {/* Input Data */}
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form className="first-hero lws-inputform">
            {/* From */}
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src="../../assets/icons/Frame.svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="from"
                  id="lws-from"
                  required
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Saidpur">Saidpur</option>
                  <option value="Cox's Bazar">Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* To */}
            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src="../../assets/icons/Frame.svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="to"
                  id="lws-to"
                  required
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Saidpur">Saidpur</option>
                  <option value="Cox's Bazar">Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div className="des-from">
              <p>Journey Date</p>
              <input
                type="date"
                className="outline-none px-2 py-2 w-full date"
                name="date"
                id="lws-date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* Guests */}
            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src="../../assets/icons/Vector (1).svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="guests"
                  id="lws-guests"
                  required
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>

            {/* Class */}
            <div className="des-from !border-r-0">
              <p>Class</p>
              <div className="flex flex-row">
                <img src="../../assets/icons/Vector (3).svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="ticketClass"
                  id="lws-ticketClass"
                  required
                  value={classType}
                  onChange={(e) => setClassType(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>

            <button
              className="addCity"
              type="button"
              id="lws-addCity"
              onClick={addBooking}
              disabled={bookingsData.length >= 3}
            >
              <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          </form>
        </div>
      </div>

      {/* Preview Data */}
      <div className="table-container">
        <table className="booking-table">
          <thead className="bg-gray-100/50">
            <tr className="text-black text-left">
              <th>Destination From</th>
              <th>Destination To</th>
              <th className="text-center">Journey Date</th>
              <th className="text-center">Guests</th>
              <th className="text-center">Class</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
            {bookingsData?.map((booking, index) => (
              <Bookings
                key={index}
                booking={booking}
                index={index}
                bookingDelete={bookingDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Search;
