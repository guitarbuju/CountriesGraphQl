import React from "react";

const ConsoleLogButton = ({ selectedCountry }) => {
  const countryConsoleLogger = (country) => {
    country ? console.log(country) : console.log("No country selected");
  };
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => countryConsoleLogger(selectedCountry)}
      >
        Print Country to the console
      </button>
    </div>
  );
};

export default ConsoleLogButton;
