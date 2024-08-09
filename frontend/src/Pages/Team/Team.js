import React, { useRef, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Bansal from "./Image/Bansal.jpg";
import Sayantan from "./Image/Sayantan.jpg";
import Hitesh from "./Image/Hitesh.jpeg";
import Devvrat from "./Image/Devvrat.jpg";
import Vinay from "./Image/Vinay.jpg";
import Gaurav from "./Image/Gaurav.jpeg";
import Somdeep from "./Image/Somdeep.jpeg";
import Bilal from "./Image/Bilal.jpg";


import { Link } from "react-router-dom";
import "../../index.css";

export default function Team() {
  const teamMembers = [
    {
      name: "Gaurav Sharma",
      imageUrl: Gaurav,
      position: "Frontend Developer",
      socialLinks: [
        { url: "https://www.linkedin.com/in/gaurav-sharma-62434224a/", iconClass: "fab fa-linkedin" },
        { url: "https://www.instagram.com/gaurav_.0216?igsh=amR0MmF0anRxMzQw", iconClass: "fab fa-instagram" },
        { url: "#", iconClass: "fab fa-twitter" },
        { url: "mailto:gauravkcity16@gmail.com", iconClass: "fas fa-envelope" },
      ],
    },
    {
      name: "Somdeep Mishra",
      imageUrl: Somdeep,
      position: "Frontend Developer",
      socialLinks: [
        { url: "https://www.linkedin.com/in/somdeepmisra/", iconClass: "fab fa-linkedin" },
        { url: "#", iconClass: "fab fa-instagram" },
        { url: "#", iconClass: "fab fa-twitter" },
        { url: "#", iconClass: "fas fa-envelope" },
      ],
    },
    {
      name: "Belal Ahmad",
      imageUrl: Bilal,
      position: "Backend Developer",
      socialLinks: [
        { url: "#", iconClass: "fab fa-linkedin" },
        { url: "https://www.instagram.com/belal4hmed?igsh=YjBkcTd5cnN5MGRl", iconClass: "fab fa-instagram" },
        { url: "#", iconClass: "fab fa-twitter" },
        { url: "#", iconClass: "fas fa-envelope" },
      ],
    },
    {
      name: "Hitesh Kumar",
      imageUrl: Hitesh,
      position: "Founder, Team Lead",
      socialLinks: [
        { url: "https://www.linkedin.com/in/hiteshkumar8642/", iconClass: "fab fa-linkedin" },
        { url: "https://www.instagram.com/hitesh.kumar8642?igsh=MThnMWYyaTVqamswcA==", iconClass: "fab fa-instagram" },
        { url: "#", iconClass: "fab fa-twitter" },
        { url: "mailto:hiteshkumar8642@gmail.com", iconClass: "fas fa-envelope" },
      ],
    },
    {
      name: "Sayantan Bairagi",
      imageUrl: Sayantan,
      position: "Frontend Developer",
       socialLinks: [
        { url: "linkedin.com/in/sayantan-bairagi-51002a239", iconClass: "fab fa-linkedin" },
        { url: "https://www.instagram.com/sayantan.bairagi_?igsh=aGh0eGFrYXp4MmZ4", iconClass: "fab fa-instagram" },
        { url: "#", iconClass: "fab fa-twitter" },
        { url: "mailto:sayantan259@gmail.com", iconClass: "fas fa-envelope" },
      ],
    },
    {
      name: "Ritik Bansal",
      imageUrl: Bansal,
      position: "Backend Developer",
     socialLinks: [
        { url: "linkedin.com/in/ritik-bansal-6764481b2", iconClass: "fab fa-linkedin" },
        { url: "https://www.instagram.com/bansalritik_31?igsh=YWE2ZWR2dzk2NnZm", iconClass: "fab fa-instagram" },
        { url: "#", iconClass: "fab fa-twitter" },
        { url: "mailto:bansalritik500@gmail.com", iconClass: "fas fa-envelope" },
      ],
    },
    {
      name: "Devvrat Kannojia",
      imageUrl: Devvrat,
      position: "Backend Developer",
      socialLinks: [
        { url: "linkedin.com/in/devvrat-kannojia-5a27811ba", iconClass: "fab fa-linkedin" },
        { url: "https://www.instagram.com/strange_dev?igsh=MWE4YXY1YjRydnhubA==", iconClass: "fab fa-instagram" },
        { url: "#", iconClass: "fab fa-twitter" },
        { url: "mailto:devkanojia1962000@gmail.com", iconClass: "fas fa-envelope" },
      ],
    },
    {
      name: "Vinay Gupta",
      imageUrl: Vinay,
      position: "Frontend Developer",
      socialLinks: [
        { url: "https://www.linkedin.com/in/vinaygupta-nitjsr/", iconClass: "fab fa-linkedin" },
        { url: "https://www.instagram.com/vinaygupta017?igsh=YjBkcTd5cnN5MGRl", iconClass: "fab fa-instagram" },
        { url: "#", iconClass: "fab fa-twitter" },
        { url: "mailto:vinaygupta.nitjsr@gmail.com", iconClass: "fas fa-envelope" },
      ],
    },
    
  ];

  const scrollContainerRef = useRef(null);
  const duplicatedTeamMembers = [...teamMembers];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Set initial scroll position to the start of the second set of team members
      container.scrollLeft = (container.scrollWidth / 3);
    }
  }, []);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    const scrollAmount = 375;

    if (container.scrollLeft <= 0) {
      container.scrollLeft = (container.scrollWidth / 3);
    }

    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    const scrollAmount = 375;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScroll - (container.scrollWidth / 3)) {
      container.scrollLeft = (container.scrollWidth / 3) - container.clientWidth;
    }

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <>
      <Header>
        <Link to="/login">
          <button className="nav-button bg-[#6c63ff] text-white rounded-[20px] py-3 px-8 mt-7 hover:bg-[#5752d8] transition-colors">Student LogIn</button>
        </Link>
      </Header>
      <div className="flex flex-col items-center justify-center p-5 ">
        <header className="text-center mb-8">
          <h1 className="text-4xl mb-2">Meet Our Team</h1>
          <h5 className="text-lg text-gray-600">
            Get to know the talented individuals behind our exceptional work.
          </h5>
        </header>
        <div className="relative w-full ">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#6c63ff] text-white rounded-full p-2 z-10" onClick={scrollLeft}>
            &lt;
          </button>
          <div ref={scrollContainerRef} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="flex overflow-x-auto gap-5 p-5 scroll-smooth">
            {duplicatedTeamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                imageUrl={member.imageUrl}
                position={member.position}
               
                socialLinks={member.socialLinks}
              />
            ))}
          </div>

          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#6c63ff] text-white rounded-full p-2 z-10" onClick={scrollRight}>
            &gt;
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

function TeamMember({ name, imageUrl, position, socialLinks }) {
  

  return (
    <article className="bg-white rounded-lg shadow-md flex flex-col items-center p-6 min-w-[375px] text-center transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-lg h-[525px]">
      <div className="mb-4">
        <img src={imageUrl} alt={name} className="rounded-full w-[150px] h-[150px] object-cover" />
      </div>
      <div className="flex flex-col items-center gap-2 flex-grow">
        <h2 className="text-[#6d6ae2] text-xl m-0">{name}</h2>
        <h3 className="text-lg text-gray-800 m-0">{position}</h3>
        
        <div className="flex gap-3 mt-auto pt-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} className="text-[#6865ff] text-2xl transition-colors duration-300 ease-in-out hover:text-[#5752d8]">
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
