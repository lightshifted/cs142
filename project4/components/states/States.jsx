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
      substring: '',
      filteredStates: window.cs142models.statesModel(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const substring = event.target.value.toLowerCase();
    const filteredStates = window.cs142models.statesModel().filter(state => state.toLowerCase().includes(substring));
    this.setState({ substring, filteredStates });
  }

  render() {
    return (
      <div className="States">
        <h2 className="headline">North American States</h2>
        <input type="text" className="input-text" placeholder="Enter substring" onChange={this.handleChange} value={this.state.substring} />
        <p className="search-results">Search results for: {this.state.substring}</p>
        {this.state.filteredStates.length > 0 ? (
          <ul>
            {this.state.filteredStates.sort().map((state, index) => (
              <li key={index} className="filtered-text">{state}</li>
            ))}
          </ul>
        ) : (
          <p>No matching states found 😢</p>
        )}
      </div>
    );
  }
}

export default States;
