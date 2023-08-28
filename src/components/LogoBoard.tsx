import React from "react";
import mobileBG from "../assets/suggestions/mobile/background-header.png";
import desktopBG from "../assets/suggestions/desktop/background-header.png";

function LogoBoard() {
  return (
    <>
      <div className="relative">
        <img
          className="rounded-[10px]"
          src={desktopBG.src}
          alt="background-header"
        />
        <div className="absolute bottom-[24px] left-[24px] w-full">
          <p className="">Eqaim</p>
          <p className="">Feedback Board</p>
        </div>
      </div>
    </>
  );
}

export default LogoBoard;
