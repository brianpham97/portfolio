import React, { useState, useEffect } from "react";

const DescrptionNav = ({ page, changePage }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (page === "hobbies") {
      setStyle({
        color: "white",
        backgroundColor: "#60a5fa",
        boxShadow: "0 0 5px #60a5fa",
        textShadow: "0 0 5px white",
      });
    } else if (page === "music") {
      setStyle({
        color: "white",
        backgroundColor: "#8b74bd",
        boxShadow: "0 0 5px #8b74bd",
        textShadow: "0 0 5px white",
      });
    } else if (page === "todo") {
      setStyle({
        color: "white",
        backgroundColor: "#6b21a8",
        boxShadow: "0 0 5px #6b21a8",
        textShadow: "0 0 5px white",
      });
    }
  }, [page]);

  return (
    <>
      <div className="max-w-screen-md h-full mx-auto pt-9">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-2 items-center text-center pt-2 px-6 mx-2 sm: m-0">
            <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800 py-2">
              About me.
            </h1>
            <p className="text-gray-500 py-2">
              Here I just want to show a bit about myself outside of the
              technical scene. I would describe myself as a huge nerd and I want
              to share my hobbies and passions with you here ~
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto flex justify-center p-4 mb-20">
        <ul className="flex flex-col gap-x-20 gap-y-10 pt-10 mt-16 sm:flex-row sm:m-0">
          <li
            id="btn"
            className="btn-blue transition duration-500 text-center"
            onClick={() => changePage("hobbies")}
            style={page === "hobbies" ? style : {}}
          >
            Hobbies
          </li>
          <li
            id="btn"
            className="btn-litepurple transition duration-500 text-center"
            onClick={() => changePage("music")}
            style={page === "music" ? style : {}}
          >
            Music
          </li>
          <li
            id="btn"
            className="btn-purple transition duration-500 cursor-pointer text-center"
            onClick={() => changePage("todo")}
            style={page === "todo" ? style : {}}
          >
            Todos
          </li>
        </ul>
      </div>
    </>
  );
};

export default DescrptionNav;
