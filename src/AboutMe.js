import React, { Component } from 'react';
import Contact from './Contact';
import './AboutMe.css'


class AboutMe extends Component {

    render() {
        return (
            // <div>
                <main>
                    <br></br>
                    <div className='AboutMe'>
                        <h2>About Me</h2>
                        <p className='AboutMe-Intro'>
                            <p>I have been oil painting for years. I specialize in miniature oil paintings. </p>
                            <p>I donate a portion of my gross sales to dog related or local nonprofit organizations.</p>
                            <p>To date I have donated over $500 to various charities.</p>
                            <br></br>
                            <h2 className="ContactMe">Contact Me</h2>
                            <p>Please contact me with any questions or to request a custom order.</p>
                            </p>
                            <br></br>
                    </div>
                    <form>
                    <Contact/>
                    </form>
                </main>
            //  </div>
      );
    }
  }
  

  export default AboutMe;