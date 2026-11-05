import { useState } from 'react';
import { SEARCH_DESTINATIONS } from '../data/content';

export default function SearchBar({ onSearch }) {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');

  const submit = (e) => {
    e.preventDefault();
    onSearch?.({ destination, checkIn, checkOut, guests });
  };

  return (
    <section className="search" id="booking">
      <div className="container">
        <form className="search-card reveal" onSubmit={submit}>
          <div className="search-field">
            <label>Destination</label>
            <select required value={destination} onChange={(e) => setDestination(e.target.value)}>
              <option value="">Where to?</option>
              {SEARCH_DESTINATIONS.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>
          <div className="search-field">
            <label>Check In</label>
            <input type="date" required value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>
          <div className="search-field">
            <label>Check Out</label>
            <input type="date" required value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>
          <div className="search-field">
            <label>Travelers</label>
            <select value={guests} onChange={(e) => setGuests(e.target.value)}>
              {['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5+ Guests'].map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-dark search-btn">Search</button>
        </form>
      </div>
    </section>
  );
}
