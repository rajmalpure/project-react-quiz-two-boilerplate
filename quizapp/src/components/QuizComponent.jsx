import React, { Component } from 'react';

export default class QuizComponent extends Component {
  render() {
    const {
      currentQuestionIndex,
      onNext,
      onPrevious,
      questions
    } = this.props;

    const currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) {
      return <div>No questions available</div>;
    }

    return (
      <div className='Quiz-page'>
        <div className='blankspace'>
          <p className='pages'>{currentQuestionIndex + 1} of {questions.length}</p>
          <h2 className='Q'>Question</h2>

          <div>
            <h4 className='Qs'>{currentQuestion.question}</h4>
            <div className='firstTwo'>
              <div className='one'>{currentQuestion.optionA}</div>
              <div className='two'>{currentQuestion.optionB}</div>
            </div>

            <div className='lastTwo'>
              <div className='three'>{currentQuestion.optionC}</div>
              <div className='four'>{currentQuestion.optionD}</div>
            </div>
          </div>

          <div className='Btn'>
            <button className='previous' onClick={onPrevious}>
              Previous
            </button>
            <button className='next' onClick={onNext}>
              Next
            </button>
            <button className='Quit' onClick={this.props.onQuit}>
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
