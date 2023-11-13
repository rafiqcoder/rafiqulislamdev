import { useEffect,useState } from "react";
import "../assets/css/style.css";
import Me from "../assets/img/Me.png";
import logo from "../assets/img/logo.png";
import { getPosts } from "../lib/sanity";
const Home = () => {
  const [reloaded,setReloaded] = useState(false);
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  let mouseCursor = document.querySelector(".cursor");
  let SmouseCursor = document.querySelector(".cursorSmall");
  let BmouseCursor = document.querySelector(".cursorBig");
  let navLinks = document.querySelectorAll(".menu li");
  let bodyText = document.querySelectorAll(".hoverE");
  
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
    return <div>Loading...</div>;
  }
    
    // console.log(data[0].pageBuilder[0].heading);
  return (
    <main id="main">
      <div className="cursor" />
      <div className="cursorSmall" />
      <div className="cursorBig" />
      <section id="menuBar" className="menu_bar">
        <nav className="navbar">
          <a href="#home" className="logo">
            <img src={logo} alt />
          </a>
          <ul className="menu">
            <li className="list_item active">
              {" "}
              <a href="#home">
                <i className="fa-duotone fa-house" />
                Home
              </a>
            </li>
            <li className="list_item">
              <a href="#">About Me</a>
            </li>
            <li className="list_item">
              <a href="#">Portfoli</a>
            </li>
            <li className="list_item">
              <a href="#">Resume</a>
            </li>
            <li className="list_item">
              <a href="#">Service</a>
            </li>
            <li className="list_item">
              <a href="#">Blog</a>
            </li>
            <li className="list_item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="content_area">
        <div className="hero_area">
          <div className="hero_area_left sticky">
            <h1 className="hoverE">
              {data[0]?.pageBuilder[0]?.small_sub_heading}<br />
              <span>{data[0]?.pageBuilder[0]?.heading}</span>{" "}
            </h1>
            <p className="hoverE">{data[0]?.pageBuilder[0]?.tagline}</p>
            <ul className="social hoverE">
              <li className="s_list_item">
                <i className="fa-brands fa-facebook" />
                fb
              </li>
              <li className="s_list_item">twitter</li>
              <li className="s_list_item">youtube</li>
              <li className="s_list_item">linkedin</li>
            </ul>
            <div className="button_grp hoverE">
              <button className="quote_btn">Get Quote</button>
              <button className="about_btn">About</button>
            </div>
          </div>
          <div className="imgArea sticky">
            <img src={Me} alt="Me" />
          </div>
        </div>
        <section className="about_main">
          <div className="right_social">
            <ul className="hoverE">
              <li className="Right_s_list">fb </li>
              <li className="Right_s_list">Twitter</li>
              <li className="Right_s_list">youtube </li>
              <li className="Right_s_list">instagram </li>
            </ul>
          </div>
          <div className="about_area">
            <img src="img/Me.png" alt="Me" className="about_img hoverE" />
            <div className="aboutinfo hoverE">
              <label htmlFor>Name</label>
              <li className="info_list">Md Rafiqul Islam</li>
              <label htmlFor>Birthday</label>
              <li className="info_list">10/10/1998</li>
              <label htmlFor>Mail</label>
              <li className="info_list">rafiqcoder@gmail.com</li>
              <label htmlFor>Phone</label>
              <li className="info_list">01878693653</li>
              <label htmlFor>Address</label>
              <li className="info_list">Dhaka-1212 ,Bangladesh</li>
              <label htmlFor>Nationality</label>
              <li className="info_list">Bangladeshi</li>
            </div>
          </div>
          <div className="about_details hoverE">
            <h3 className="ftitle">About Me</h3>
            <h1 className="about_t">
              World Leading UI/UX designer and developer
            </h1>
            <h3 className="abut_sub">
              A passionate UI/UX Designer and Web Developer based In NYC, USA
            </h3>
            <p className="abut_desc">
              Hi! My name is Md Rafiqul Islam. I am UI/UX designer and a
              fullstack developer, and very passisonate and dedicated to my
              work. With 20 years experience as a professional graphic designer,
              I have acquired the skills and knowledge necessary to make your
              project a success.
            </p>
            <button className="abut_btn"> Download cv </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
