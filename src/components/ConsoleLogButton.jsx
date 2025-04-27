import React from "react";

const ConsoleLogButton = ({ selectedCountry }) => {
  const countryConsoleLogger = (country) => {
    country ? console.log(country) : console.log("No country selected");
  };
  return (
    <div>
      <button
        className="bg-sky-700 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={() => countryConsoleLogger(selectedCountry)}
      >
        Print Country to the console
      </button>
    </div>
  );
};

export default ConsoleLogButton;
