import React, { useState } from "react";
 
export default function SearchBar({ onSearch }) {
  // TODO 13:
  // Create local state variable inputValue initialized to ""
  const [inputValue, setInputValue] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    // TODO 14:
    // If inputValue.trim() is not empty:
    // - call onSearch with inputValue.trim()
    // - clear the input by setting inputValue to ""
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      onSearch(trimmedValue);
      setInputValue("");
    }
  };
 
  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      {/* TODO 15:
          Create a controlled input:
          - value should be inputValue
          - onChange should update inputValue
          - add a helpful placeholder */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for movies..."
      />
      <button type="submit" className="primary">Search Movies</button>
    </form>
  );
}
