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
                            <p>I have been oil painting for years. I love focusing on fine details. As a result, it was taking me a long time to finish "normal sized" paintings.</p>
                            <p>A couple years ago I decided to switch to miniature canvases so I could get more than one painting 
                                completed in a year! </p>
                            <p>I donate a portion of my gross sales to dog related or local nonprofit organizations. To date I have donated over $500 to various charities.</p>
                            <br></br>
                            <h2 className="ContactMe">Contact Me</h2>
                            <p>I am located in Iowa. Currently, I provide shipping in the US and Canada.</p>
                            <p>Please contact me with any questions or to request a custom order.</p>
                            </p>
                            <br></br>
                    </div>
                    <div className='map'>
                    <form>
                    <Contact/>
                    </form>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.6869982231683!2d-90.5230084844688!3d41.53272019493562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e236a666bc81cd%3A0x8a6c734d99276bde!2sRiverview%20Park%20Dr%2C%20Bettendorf%2C%20IA%2052722!5e0!3m2!1sen!2sus!4v1616012588412!5m2!1sen!2sus" width="400" height="300" loading="lazy"></iframe>
                    </div>
                </main>
            //  </div>
      );
    }
  }
  

  export default AboutMe;