import React, { Component } from 'react';

class AboutMe extends Component {

    render() {
        // console.log(this.state)
        console.log('About Me here')
        return (
            <div>
                <main>
                    <br></br>
                    <div className='AboutMe-Intro-Div'>
                        <h3>About Me</h3>
                        <br></br>
                        <br></br>
                        <p className='AboutMe-Intro'>
                            <p>I have been oil painting for years. I specialize in miniature oil paintings. </p>
                            <p>I donate a portion of my gross sales to dog related or local nonprofit organizations.</p>
                            <p>To date I have donated over $500to various charities.</p>
                            <h2 className="Charities">Donations to the following charities:</h2>
                            </p>
                            <br></br>
                    </div>
                </main>
             </div>
      );
    }
  }
  

  export default AboutMe;