import React from 'react';
import ReactDOM from 'react-dom';

class Student extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:  'Reena',
      grade: 5,
      favorite_color: 'Blue',
      favorite_Subject: 'Maths'
    }
  }

  render() {
    return (
      <div>
        <h1>Student Details</h1>
        <p>My name is {this.state.name}.</p>
        <p>I am in grade {this.state.grade}.</p>
        <p>My favorite color is {this.state.favorite_color}.</p>
        <p>My favorite subject is {this.state.favorite_Subject}.</p>
        </div>
    )
    }

    ReactDOM.render(<Student />, document.getElementById('root'));