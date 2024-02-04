import React from "react";
// import 'https://unpkg.com/pattern.css';
import ac from "../../assets/portfolio/ac.png";
import bbq from "../../assets/portfolio/bbq.png";
import cycle from "../../assets/portfolio/cycle.png";
import "./Portfolio.css";
import "./patern.css";
const experiences = [
  {
    title: "Banao",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, reprehenderit aspernatur minus ex recusandae corrupti blanditiis praesentium mollitia voluptatem voluptatibus.",
    image: ac,
    live: ".com",
  },
  {
    title: "Live Ivory",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, reprehenderit aspernatur minus ex recusandae corrupti blanditiis praesentium mollitia voluptatem voluptatibus.",
    image: cycle,
    live: ".com",
  },
  {
    title: "ESG-Bites",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, reprehenderit aspernatur minus ex recusandae corrupti blanditiis praesentium mollitia voluptatem voluptatibus.",
    image: bbq,
    live: ".com",
  },
];
const personalProject = [
  {
    title: "Banao",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, reprehenderit aspernatur minus ex recusandae corrupti blanditiis praesentium mollitia voluptatem voluptatibus.",
    image: ac,
    live: ".com",
  },
  {
    title: "Live Ivory",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, reprehenderit aspernatur minus ex recusandae corrupti blanditiis praesentium mollitia voluptatem voluptatibus.",
    image: cycle,
    live: ".com",
  },
  {
    title: "ESG-Bites",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, reprehenderit aspernatur minus ex recusandae corrupti blanditiis praesentium mollitia voluptatem voluptatibus.",
    image: bbq,
    live: ".com",
  },
];

const Portfolio = () => {
  return (
    <div className="text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 pb-10">
      <div className=" pt-10">
        <h1 className="text-center"> Clients Projects</h1>
      </div>
      <div className="grid grid-col  sm:grid-cols-3 gap-3 m-10">
        {experiences.map((item) => (
          <div key={item.id} className="bg-gray-900 rounded-t-xl">
            <div className="h-[300px] overflow-hidden phovered">
              <img
                src={item.image}
                className="border border-gray-200 rounded-xl rounded-b-none border-b-0"
                alt=""
              />
            </div>
            <div className="body border p-3">
              <h2>{item.title}</h2>
              <h3>position: Frontend Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                atque inventore ea asperiores consectetur et dicta expedita
                impedit temporibus quo.
              </p>
              <button>Live</button>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-20">
        <h1 className="text-center">Personal Best Projects</h1>
      </div>
      <div className="grid grid-col  sm:grid-cols-3 gap-3 m-10">
        {personalProject.map((item) => (
          <div key={item.id} className="bg-gray-900 rounded-t-xl">
            <div className="h-[300px] overflow-hidden phovered">
              <img
                src={item.image}
                className="border border-gray-200 rounded-xl rounded-b-none border-b-0"
                alt=""
              />
            </div>
            <div className="body border p-3">
              <h2>{item.title}</h2>
              <h3>position: Frontend Developer</h3>
              <p>
                {item.desc}
              </p>
              <button className="abut_btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 rounded-full mt-5 uppercase">
                Live
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
