import React, { Component } from 'react';

class TabSelector extends Component {

  render() {
    const { activeId, changeTab } = this.props;
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={changeTab}
          className={activeId === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={changeTab}
          className={activeId === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={changeTab}
          className={activeId === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
