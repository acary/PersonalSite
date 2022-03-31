'use strict';

const f = React.createElement;

class UnlockButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locked: false };
  }

  render() {
    if (this.state.locked) {
      return '🔓';
    }

    return e(
      'span',
      { onClick: () => this.setState({ locked: true }) },
      '🔒'
    );
  }
}

// Find all DOM containers, and render Unlock buttons into them.
document.querySelectorAll('.unlock_button_container')
  .forEach(domContainer => {
    // Read the lock ID from a data-* attribute.
    const lockID = parseInt(domContainer.dataset.lockid, 20);
    ReactDOM.render(
      e(UnlockButton, { lockID: lockID }),
      domContainer
    );
  });
