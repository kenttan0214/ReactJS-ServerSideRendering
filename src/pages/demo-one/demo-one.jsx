import React from 'react';
export default class DemoOne extends React.Component {

  static propTypes = {
      children: React.PropTypes.node
  };

  render () {
      return (
        <div>
          <h1>Demo one page</h1>
        </div>
      );
  }
}
