import React, { useState, useRef } from "react";
import { useKeyHandler } from "../hooks/useKeyHandler";
import ConnsoleLogButton from "./ConsoleLogButton";
import { useDataFetch } from "../hooks/useDataFech";
import { grQlCountriesQuery } from "../queries/countryQuery";

const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const myInputRef = useRef();
  const defaultValue = "Select your Country";
  const focus = useKeyHandler(myInputRef, defaultValue);

  const handleSelectedCountry = (e) => {
    const selectedCode = e.target.value;
    const selected = data.countries.find(
      (country) => country.code === selectedCode
    );

    if (selected) {
      setSelectedCountry({
        code: selected.code,
        name: selected.name,
        emoji: selected.emoji,
      });
    }
  };

  const { loading, data, error } = useDataFetch(grQlCountriesQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-2">
      <form>
        <div className="flex flex-col gap-2 items-center justify-center">
          <label className="text-xl text-gray-200">Country Select</label>
          <span className=" text-gray-200 text-xs">
            {!focus
              ? "Press ctrl + enter to toggle focus"
              : "Now use ↑, ↓ and ⏎ to select country"}
          </span>
          <select
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            ref={myInputRef}
            defaultValue={defaultValue}
            onChange={handleSelectedCountry}
          >
            <option className="text-xs">{defaultValue}</option>
            {data.countries.map((country, index) => (
              <option key={index} value={country.code}>
                {country.name}
                {"   "}
                {country.emoji}
              </option>
            ))}
          </select>
          {focus && selectedCountry && (
            <p className="text-yellow-300">
              <span>The Selected country is :{selectedCountry.name} </span>
              <span>with code:{selectedCountry.code}</span>
            </p>
          )}
        </div>
      </form>
      <ConnsoleLogButton selectedCountry={selectedCountry} />
    </div>
  );
};

export default CountrySelect;
