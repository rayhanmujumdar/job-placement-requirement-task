import React, { useState } from "react";
import SearchContainer from "../SearchContainer";

function Home() {
  const [inputValue,setValue] = useState('')
  const [displayContainer,setDisplay] = useState(false)
  const display = () => {
    setDisplay(!displayContainer)
  }
  console.log(inputValue)
  return (
    <div className="flex justify-center items-center flex-col py-10">
      <div className="max-w-4xl relative">
        <input
          onBlur={display}
          onFocus={display}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Search code Link"
          className="input w-[350px] md:w-[500px] border-red-100 outline-slate-500 focus:border-none"
        />
      {displayContainer && <SearchContainer inputValue={inputValue}></SearchContainer>}
      </div>
    </div>
  );
}

export default Home;
