import React, { Component } from 'react'

export default class ResultComponent extends Component {
  render() {
    return (
    <>
    <h1 className='res'>Result</h1>
    <div className='Resultbox'>
        <div className='text'>
            <h3>You need more Practice!</h3>
        </div>

        <div className='score'>
            <h2>Your score is 20%</h2>
        </div>

        <div className='TEXT'>
            <div className='TEXTS'>
                <div><b>Total number of questions</b></div>
                <div><b>15</b></div>
            </div>
            

            <div className='TEXTS'>
                <div><b>Number of attempted questions</b></div>
                <div><b>9</b></div>
            </div>

            <div className='TEXTS'>
                <div><b>Number of correct answers</b></div>
                <div><b>3</b></div>
            </div>

            <div className='TEXTS'>
                <div><b>Number of wrong answers</b></div>
                <div><b>6</b></div>
            </div>

        </div>
    </div>

    <div className='buttons'>
        <button className='play-again'>Play Again</button>
        <button className='Back-to-home'>Back to home</button>
    </div>
      
    </>
    )
  }
}
