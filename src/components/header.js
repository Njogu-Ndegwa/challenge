import React from 'react';


const Header = () => (
  <>
    <header>
        <div className="container">
            <div id="branding">
                <h1>DEMO Streaming </h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Log in</a></li>
                    <li> <a className="btn" href="about.html">Start your free Trial</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <section id="sub-header" >
    <div className="container" >
          <p>Popular Titles</p>
        </div>
    </section>
</>
);

export default Header;
