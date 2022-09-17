import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchContainer from "../SearchContainer";

function Home() {
  const [inputValue, setValue] = useState("");
  const [displayContainer, setDisplay] = useState(false);
  const [getLinkArray, setGetLink] = useState([]);
  const [getData,setData] = useState(null)
  const display = () => {
    setDisplay(true);
  };
  useEffect(() => {
    axios.get("http://localhost:5000/link").then((getData) => {
      const { data } = getData;
      setGetLink(data);
    });
  }, []);
  useEffect(() => {
    const getData = getLinkArray.filter(data =>  {
      const title = data?.title?.toLowerCase();
      if(title?.includes(inputValue.toLowerCase())){
        return title
      }else{
        return data?.key?.filter(k => k.includes(inputValue))
      }
    })
    setData(getData)
  },[inputValue])
  console.log(getData)
  return (
    <div  className="flex justify-center items-center flex-col py-10">
      <div  className="max-w-4xl relative">
        <input
          // onBlur={display}
          onFocus={display}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Search code Link"
           className="input w-[350px] md:w-[500px] border-red-100 outline-slate-500 focus:border-none"
        />
        {displayContainer && (
          <SearchContainer 
          inputValue={inputValue}
          getData={getData}
          ></SearchContainer>
        )}
      </div>
    </div>
  );
}

export default Home;
