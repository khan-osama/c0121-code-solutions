import React from 'react'

class DrawerIcon extends React.Component {

  render() {
    return (
      <div className={`toolbar ${this.props.drawerOpen ? "toolbarhidden" : ''}`}>
        <div className="icon">
          <button className="hamburger" onClick={this.props.handleClick}>
            <i className="fas fa-bars fa-lg"></i>
          </button>
        </div>
      </div>
    )
  }
}

class AppDrawerList extends React.Component {

  render() {
    return (
      <div className={`drawercontainer ${this.props.drawerOpen ? "drawercontaineropen" : ''}`}>
        <AppDrawerMenuHeader />
        <AppDrawerOptionsRow drawerOpen={this.props.drawerOpen} handleClick={this.props.handleClick} />
      </div>
    )
  }
}

class AppOverlay extends React.Component {
  render() {
    return (
      <div className={`${this.props.drawerOpen ? "overlay" : 'overlayhidden'}`} onClick={this.props.handleClick}></div>
    )
  }
}
class AppDrawerMenuHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>
          Menu
        </h1>
      </div>
    )
  }
}

class AppDrawerOptionsRow extends React.Component {
  render() {
    return (
      <div className="rowLinks">
        <a onClick={this.props.handleClick}>About</a>
        <a onClick={this.props.handleClick}>Get Started</a>
        <a onClick={this.props.handleClick}>Sign In</a>
      </div>
    )
  }
}

class AppDrawer extends React.Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      drawerOpen: !prevState.drawerOpen
    }))
  }

  render() {
    return (
      <div className="AppContainer">
        <div className="AppTopBar">
          <DrawerIcon drawerOpen={this.state.drawerOpen} handleClick={this.handleClick} />
        </div>
        <AppDrawerList drawerOpen={this.state.drawerOpen} handleClick={this.handleClick} />
        <AppOverlay drawerOpen={this.state.drawerOpen} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default AppDrawer
