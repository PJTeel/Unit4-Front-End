import React, { Component } from 'react';
import NameForm from './Contact';
import Contact from './Contact';
import './App.css';


class AboutMe extends Component {

    render() {
        // console.log(this.state)
        console.log('About Me here')
        return (
            <div>
                <main>
                    <br></br>
                    <div className='AboutMe-Intro-Div'>
                        <h2>About Me</h2>
                        <br></br>
                        <br></br>
                        <p className='AboutMe-Intro'>
                            <p>I have been oil painting for years. I specialize in miniature oil paintings. </p>
                            <p>I donate a portion of my gross sales to dog related or local nonprofit organizations.</p>
                            <p>To date I have donated over $500 to various charities.</p>
                            <br></br>
                            <h2 className="Contact Me">Contact Me</h2>
                            <p>Please contact me with any questions or to request a custom order.</p>
                            </p>
                            <br></br>
                    </div>
                    <ref>
                    <Contact/>
                    </ref>
                </main>
             </div>
      );
    }
  }
  

  export default AboutMe;