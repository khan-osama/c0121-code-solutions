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
