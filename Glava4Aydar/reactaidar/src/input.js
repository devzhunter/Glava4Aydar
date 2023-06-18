import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: "" };
  }

  onInputChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.state.text || "Введите текст"}</h1>
        <input type="text" onChange={this.onInputChange} />
      </div>
    );
  }
}

export default Header;