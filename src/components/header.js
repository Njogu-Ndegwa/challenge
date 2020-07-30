import React from 'react';


const Header = ({titles}) => (
  <>
    <header>
        <div className="container">
            <div id="branding">
                <h1>DEMO Streaming </h1>
            </div>
            <nav>
                <ul>
                    <li><button href="#">Log in</button></li>
                    <li> <button className="btn" href="about.html">Start your free Trial</button></li>
                </ul>
            </nav>
        </div>
    </header>
    <section id="sub-header" >
    <div className="container" >
          <p>Popular {titles} </p>
        </div>
    </section>
</>
);

export default Header;
