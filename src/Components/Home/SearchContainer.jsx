import React from "react";
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid'

function SearchContainer({ getData }) {
  console.log(getData)
  return (
    <div  className={`bg-white text-black md:w-[500px] w-[350px] p-3 rounded-md absolute top-14 ${getData.length && "h-96 overflow-scroll"} `}>
      <div  className="flex flex-col gap-x-1 whitespace-pre-wrap  overflow-hidden">
        {
          getData.length ? getData.map(value => <p className="flex gap-x-3 p-2 font-semibold text-lg cursor-pointer hover:underline">{<DocumentMagnifyingGlassIcon  className="h-6 w-6 text-blue-500"></DocumentMagnifyingGlassIcon>}<a target='_blank' href={value.link}>{value.title}</a></p>): <p className="flex justify-center text-red-400">Not Found</p>
        }
      </div>
    </div>
  );
}

export default SearchContainer;
