import React, { useRef } from "react";

const Search = (props) => {
  const yearEl = useRef();
  const monthEl = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const year = yearEl.current.value;
    const month = monthEl.current.value;

    props.onSearch(year, month);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="year">Year</label>
      <select id="year" ref={yearEl}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
      <label htmlFor="month">Year</label>
      <select id="month" ref={monthEl}>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      <button>Find Events</button>
    </form>
  );
};

export default Search;
