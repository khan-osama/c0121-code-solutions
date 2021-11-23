<<<<<<< HEAD
import React from "react";

class StopWatch extends React.Component {
  constructor() {
    super();
    this.state = {
      isStopped: true,
      runningTime: 0
    }
    this.timerState = this.timerState.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  controlsClass() {
    const { isStopped } = this.state;
    if (isStopped === true) return 'fas fa-play'
    return 'fas fa-pause'
  }

  timerState() {
    this.setState(prevState => ({
      isStopped: !prevState.isStopped,
    }))

    const { isStopped } = this.state;

    if (isStopped === true) {
      this.timer = setInterval(() => {
        this.setState({
          runningTime: this.state.runningTime + 1
        })
      }, 1000)
    } else {
      clearInterval(this.timer)
    }
  }

  resetTimer() {
      const { isStopped } = this.state;
    if (isStopped === true) {
      this.setState({
        runningTime: 0
      })
    }
  }

  render() {
    const cssControls = this.controlsClass();
    const { runningTime } = this.state;

    return (
      <div className="stopwatch">
        <div className="circle" onClick={this.resetTimer}>
          <span className="time">{runningTime}</span>
        </div>
        <div className="controls">
          <button className="play">
            <i className={`${cssControls}`} onClick={this.timerState}></i>
          </button>
        </div>
      </div>
    )
  }
}

export default StopWatch
=======
import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false,
      seconds: 0,
      iconUrl: 'fas fa-pause'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      isPlaying: !event.isPlaying,
      seconds: setInterval(() => {
        return this.state.seconds + 1;
      }, 1000),
      iconUrl: 'fas fa-play'
    });
  }

  render() {
    return (
      <>
        <div className="circle">
          <div className="time">
            {this.state.seconds}
          </div>
        </div>
        <div className="icon">
          <i onClick={this.handleClick} className={this.state.iconUrl}></i>
        </div>
      </>
    );
  }
}

export default Stopwatch;
>>>>>>> 3d904c64a3ac9b2cfedfa045fd833b53762ba179
