import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";
import { useEffect,useState } from "react";
import {ColorRing} from "react-loader-spinner";
import "../assets/css/style.css";
import Me from "../assets/img/Me.png";
import Header from "../components/Layout/Header";
import { getPosts } from "../lib/sanity";
import About from "./About";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Home = () => {
  const [reloaded,setReloaded] = useState(false);
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  let mouseCursor = document.querySelector(".cursor");
  let SmouseCursor = document.querySelector(".cursorSmall");
  let BmouseCursor = document.querySelector(".cursorBig");
  let navLinks = document.querySelectorAll(".menu li");
  let bodyText = document.querySelectorAll(".hoverE");

    const { loginWithRedirect } = useAuth0();


  
    window.addEventListener("load",() => {
        setReloaded(!reloaded);
    })

  // console.log(data2);

  // setup sanity client
  
    // setup sanity fetch function
    
    
    // setup query


    // setup fetch function
  const fetchProjects = async () => {
      
    setLoading(true);
        const data =  await getPosts();
        setData(data);
    };

    // run fetch function
  useEffect(() => {
    
    fetchProjects();
    setLoading(false);
  },[]);

  useEffect(() => {
    document.title = "Home | Md Rafiqul Islam";
    window.addEventListener("mousemove", cursor);

    function cursor(e) {
      mouseCursor.style.top = e.pageY + "px";
      mouseCursor.style.left = e.pageX + "px";
      SmouseCursor.style.top = e.pageY + "px";
      SmouseCursor.style.left = e.pageX + "px";
      BmouseCursor.style.top = e.pageY + "px";
      BmouseCursor.style.left = e.pageX + "px";
    }

    navLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        BmouseCursor.classList.add("link-grow2");
        mouseCursor.style.border = "none";
        SmouseCursor.style.opacity = "0";
        BmouseCursor.style.opacity = "1";
      });
      link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        BmouseCursor.classList.remove("link-grow2");

        mouseCursor.style.border = "1px solid #FFF";
        SmouseCursor.style.opacity = "1";
        BmouseCursor.style.opacity = "1";
      });
    });

    bodyText.forEach((link) => {
      link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");

        BmouseCursor.classList.add("link-grow2");

        mouseCursor.style.border = "none";
        SmouseCursor.style.opacity = "0";
        BmouseCursor.style.opacity = "1";
      });
      link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");

        BmouseCursor.classList.remove("link-grow2");
        mouseCursor.style.border = "1px solid #FFF";
        SmouseCursor.style.opacity = "1";
        BmouseCursor.style.opacity = "1";
      });
    });
  },[reloaded]);

  if (loading) {
    return (
      <div className="w-[85%] h-screen flex justify-center items-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#b8c480", "#B2A3B5", "#F4442E", "#51E5FF", "#429EA6"]}
        />
      </div>
    );
  }
    
    // console.log(data[0].pageBuilder[0].heading);
  return (
    <main id="main">
      <div className="cursor" />
      <div className="cursorSmall" />
      <div className="cursorBig" />
      <Header />
      <section className="content_area">
        <div className="hero_area">
          <div className="hero_area_left sticky">
            <motion.div
              initial={{ marginTop: 100 }}
              animate={{ x: 100, marginTop: 0 }}
              transition={{ duration: 1 }}
            />
            <h1 className="hoverE">
              {data[0]?.pageBuilder[0]?.small_sub_heading}
              <br />
              <span>{data[0]?.pageBuilder[0]?.heading}</span>{" "}
            </h1>
            <p className="hoverE">{data[0]?.pageBuilder[0]?.tagline}</p>
            <ul className="social hoverE flex gap-4">
              <li className="Right_s_list mb-2 ">
                <FaFacebook className="text-3xl text-blue-700 bg-white rounded-full w-10 h-10 flex justify-center items-center" />{" "}
              </li>
              <li className="Right_s_list mb-2">
                <FaLinkedin className="text-3xl text-blue-700   w-10 h-10 flex justify-center items-center" />{" "}
              </li>
              <li className="Right_s_list text-2xl text-red-700 bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <FaYoutube />
              </li>
              <li className="Right_s_list text-2xl text-purple-700 bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <FaGithub />
              </li>
            </ul>
            <div className="button_grp hoverE">
              <button className="quote_btn">Get Quote</button>
              <button className="about_btn" onClick={() => loginWithRedirect()}>
                LOGIN
              </button>
            </div>
          </div>
          <div className="imgArea sticky">
            <motion.div
              initial={{ marginTop: 100 }}
              animate={{ x: 100, marginTop: 0 }}
              transition={{ duration: 1 }}
            />
            <img src={Me} alt="Me" />
          </div>
        </div>
        <About />
      </section>
    </main>
  );
};

export default Home;
