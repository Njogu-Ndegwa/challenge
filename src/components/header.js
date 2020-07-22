import React from 'react';

// function header() {
//   const [sbheader, setSbheader] = useState()

//   return (
//     <header className="header">
//       <h1>Demo Streaming</h1>
//       <ul>
//         <li><a>Log in</a></li>
//         <li><a>Start your free trial</a></li>
//       </ul>
//       <div className="sub-header" ></div>
//     </header>
//   )
// };

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
