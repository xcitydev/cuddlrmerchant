import React, { useEffect, useState } from "react";


function Header() {
  const [navText, setnavText] = useState("#FFFF");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setnavColor("#F8FFF2")
      : setnavColor("transparent");
    window.scrollY > 10 ? setnavText("#000") : setnavText("#000");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div
      className=" w-full py-4 fixed flex justify-end z-50"
      style={{
        backgroundColor: navColor,
        transition: "all 1s",
        color: navText,
      }}
    >
      <div>
        <ul className="flex space-x-7 text-[15px] pr-[7rem]">
          <li className="p-1">Support</li>
          <li
            className="p-1
            "
          >
            Developers
          </li>
          <li
            className="bg-[#006E1C] p-2 rounded-md text-white
            "
          >
            Show Table
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
