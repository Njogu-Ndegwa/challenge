import React from 'react';
import placeholder from '../placeholder.png';
import {Link} from 'react-router-dom'

const Content = () => (
    <section className="content" >
        <div className="container" >
            <div className="titles" >
                <div>
                <div className="title" >
                    <h1>SERIES</h1>
                    <Link to='/series' ><img src={placeholder} alt="placeholder" ></img></Link>
                </div>
                <p>Popular Series</p>
                </div>
                <div>
                <div className="title" >
                    <h1>MOVIES</h1>
                    <Link to='/movies' ><img src={placeholder} alt="placeholder" ></img></Link>
                </div>
                <p>Popular Movies</p>
                </div>

            </div>
        </div>
    </section>
)

export default Content;