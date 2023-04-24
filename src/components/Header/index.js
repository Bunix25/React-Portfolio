import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Sviatoslav Zakharuk Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section className="hero">
        <div class="hero-cta">
          
          <h2>Welcome</h2>
          <p>
          On this page, you'll see Sviatoslav Zakharuk's React-based portfolio, 
          which showcases his various projects.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
