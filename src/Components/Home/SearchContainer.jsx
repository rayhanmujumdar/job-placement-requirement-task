import React from "react";
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid'

function SearchContainer({ inputValue }) {
  return (
    <div className="bg-white text-black md:w-[500px] w-[350px] p-3 rounded-md absolute top-14">
      <div className="flex gap-x-1 wrap overflow-hidden">
        {<DocumentMagnifyingGlassIcon className="h-6 w-6 text-blue-500"></DocumentMagnifyingGlassIcon>}
        {inputValue ? inputValue : " search input"}
      </div>
    </div>
  );
}

export default SearchContainer;
