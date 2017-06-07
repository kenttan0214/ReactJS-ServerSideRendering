import React from 'react';
export default class DemoTwo extends React.Component {

  static propTypes = {
      children: React.PropTypes.node
  };

  render () {
      return (
        <div>
          <h1>Demo two page</h1>
        </div>
      );
  }
}
