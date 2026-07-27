import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = { entrycount: 0, exitcount: 0 };
    this.updateEntry = this.updateEntry.bind(this);
    this.updateExit = this.updateExit.bind(this);
  }

  updateEntry() {
    this.setState((prevState, props) => {
      return { entrycount: prevState.entrycount + 1 };
    });
  }

  updateExit() {
    this.setState((prevState, props) => {
      return { exitcount: prevState.exitcount + 1 };
    });
  }

  render() {
    return (
      <div className="counter-container">
        <div className="counter left">
          <button className="btn" onClick={this.updateEntry}>Login</button>
          <span className="label"> {this.state.entrycount} People Entered!!!</span>
        </div>
        <div className="counter right">
          <button className="btn" onClick={this.updateExit}>Exit</button>
          <span className="label"> {this.state.exitcount} People Left!!!</span>
        </div>
      </div>
    );
  }
}

export default CountPeople;
