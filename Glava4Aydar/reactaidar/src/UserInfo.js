import React from 'react';

class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>Возраст: {this.props.age}</p>
        <p>Город: {this.props.city}</p>
      </div>
    );
  }
}

export default UserInfo;