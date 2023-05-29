import React, { useState } from "react";
import DescrptionNav from "./DescriptionNav";
import Hobbies from "./Hobbies/Hobbies";
import Music from "./Music/Music";
import Todo from "./Todo/Todo";

const About = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [page, setPage] = useState("hobbies");

  const changePage = (select) => {
    setPage(select);
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900">
      <DescrptionNav page={page} changePage={changePage} />
      {page === "hobbies" ? <Hobbies /> : null}
      {page === "music" ? <Music /> : null}
      {page === "todo" ? <Todo /> : null}
    </div>
  );
};

export default About;
