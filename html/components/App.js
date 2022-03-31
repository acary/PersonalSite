'use strict';

const app = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page1: true,
      page2: false
    };
  }

  render() {
    if (this.state.page1) {
      return app(
        'h3',
        { onClick: () => this.setState({ page1: false, page2: true }) },
        '🚶'
      );
    }

    if (this.state.page2) {
      return app(
        'h3',
        { onClick: () => this.setState({ page1: true, page2: false }) },
        '🏃'
      );
    }

    return app(
      'button',
      { onClick: () => this.setState({ page1: true }) },
      'View'
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.root')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const pageID = parseInt(domContainer.dataset.pageid, 1);
    ReactDOM.render(
      app(App, { pageID: pageID }),
      domContainer
    );
  });
