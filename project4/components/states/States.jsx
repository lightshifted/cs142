import React from 'react';
import './States.css';

/**
 * Define States, a React component of CS142 Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
    this.state = {
      states: window.cs142models.statesModel(),
      listItems: [],
      inputValue: '',
    }
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value});
  }

  handleStates = (event) => {
    for (var i = 0; i < 3; i++) {
      this.state.listItems[i] = <li key={i}>{this.states[i]}</li>;
    }
    var retVal =
      <div>
        <ul>
          {this.state.listItems}
        </ul>
      </div>;
    return retVal;
  }

  render() {
    return (
      <div>
        Replace this with the code for CS142 Project 4, Problem 2
      </div>
      {this.handleStates()}
    );
  }
}

export default States;
