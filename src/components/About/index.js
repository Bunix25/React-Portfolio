import React from "react";
import profileImage from "../../assets/large/Profile/Profile_pic.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
  <div className="intro-info">
    <div className="intro-img">
      <img src={profileImage} style={{ width: "100%" }} alt="profile" />
    </div>
    <p>
          My name is Sviatoslav Zakharuk and I currently reside in Ottawa, Ontario. 
          I grew up in Uman, Ukraine and got my Bachelor's degree in Management at Uman University in 2012. 
          I worked in the Management field for years and then I decided that I needed a career change 
          to something that I was passionate about. That's when I discovered the world of coding and all of the opportunites 
          that came along with it.

I started the Coding Boot Camp at Carleton University in November, 2022. 
I have learned the basics of HTML and CSS and am starting to learn Javascript. 
Coding Boot Camp at Carleton University is teaching me how to work through coding on my own and with groups. 
We write code ourselves and debug code that has issues. I have 9 hours of class a week, study at least 20 hours 
a week and still maintain my full-time work job while I wait to transition to my next career 
at the end of the bootcamp. I'm hard-working and, most of all, very excited and passionate about coding.
          </p>
       </div>
     </div>
        
      
    </section>
  );
}

export default About;
