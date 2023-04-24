import React from "react";
import Project2 from "../../assets/small/Project2.png";
import tech_blog from "../../assets/small/tech-blog.png";
import weatherDashImage from "../../assets/small/Weather_Dash.png";
import noteTakerImage from "../../assets/small/NoteTaker.png";
import jate from "../../assets/small/Jate.png";
import vingage from "../../assets/small/Vintage.png";
import teamprofile from "../../assets/small/team-profile-generator.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Projects</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://rnvshi.github.io/Live-Sound-Searcher/">
                {" "}
                <img
                  src={Project2}
                  className="my-2"
                  style={{ width: '100%' }}
                  alt="project2"
                  
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Live-Sound-Searcher</h4>
              <p>
              You want to see who is coming to town to play - you get excited and you want
               to hear their music RIGHT NOW! You can also see their image, read a bio, and listen to their latest album.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://vintagecruisers.herokuapp.com/home/">
                {" "}
                <img
                  src={vingage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Vintagecruisers"
                  
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Vintage Cruisers</h4>
              <p>
              Vintage Cruisers E-commerce Fullstack Website.
Vintage Cruisers is a website that offers vintage car rental services to customers who are looking 
to add a touch of style and elegance to their special events. Whether it's a wedding, prom night, 
or a photoshoot, Vintage Cruisers has a collection of classic cars that are sure to make any occasion unforgettable.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://dry-reaches-19767.herokuapp.com/">
                {" "}
                <img
                  src={jate}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="jate"
                  
                />
              </a>
            </div>
            <div className="job-text">
              <h4>J.A.T.E</h4>
              <p>
              J.A.T.E is a Progressive Web Application (PWA) that runs in the browser, 
              offline and can be installed locally to your machine. This application features a number 
              of data persistence techniques, insuring the application runs regardless of browser 
              supported function. J.A.T.E uses an IndexedDB database and the idb package. 
              This application is deployed to Heroku, to access it in production continue reading the documentation!.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://evening-harbor-89511.herokuapp.com/">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note_Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
                An application that provides the user the ability to add new
                notes, and to delete notes.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://bunix25.github.io/Weather-dashboard/">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A website that allows the user see the weather outlook for
                multiple cities. The user can enter a city and see a 5-Day
                Forecast. The user can see the temperature, humidity levels,
                wind speed as well as the UV index.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://radiant-bayou-68350.herokuapp.com/">
                {" "}
                <img
                  src={tech_blog}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Tech-Blog"
                  
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Tech-Blog</h4>
              <p>
              This app utilizes many different files, database storage, and technologies to create a Tech blog. 
              A user can view any blogs on the main page and click them to see the comments. 
              Both the post and comments will show who posted them.

If a user would like to create their own blog they can sign up to create an account or login to an existing one.
 Once logged in they now have access to a dashboard for posting blogs. They can also go to other blogs and comment 
 on them leaving their name and a date.

The user then can logout and end their session or a timeout exists on the session as well.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Bunix25/Team-Profile-Generator/">
                {" "}
                <img
                  src={teamprofile}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Team Profile Generator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Team-Profile-Generator</h4>
              <p>
              This app generates a team profile using the Inquirer module from Node.js 
              and displays the information on a newly created HTML page. This app focused on OOP and TDD using jest..{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
