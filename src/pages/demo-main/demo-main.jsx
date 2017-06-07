import React from 'react';
export default class DemoMain extends React.Component {

  static propTypes = {
      children: React.PropTypes.node
  };

  render () {
      return (
        <div>
          <h1>Main</h1>
          {this.props.children}
        </div>
      );
  }
}
