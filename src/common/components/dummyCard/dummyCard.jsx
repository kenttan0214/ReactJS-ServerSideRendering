import React from 'react';
export default class DummyCard extends React.Component {

  static propTypes = {
      children: React.PropTypes.node
  };

  render () {
      return (
        <div>
          <h1>Dummy Card</h1>
          {this.props.children}
        </div>
      );
  }
}
