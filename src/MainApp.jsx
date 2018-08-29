import React, { Component } from "react";

class MainApp extends Component {
  state = {
    account: "",
    bought: "",
    sold: "",
    fee: "",
    shares: ""
  };

  handleSubmitForm = e => {
    e.preventDefault();
    e.target.reset();
    console.log(this.state.account);
  };

  handleChange = e => {
    this.setState({ account: e.target.value });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmitForm}>
        <span>Account Balance</span>
        <input name="account" type="text" onChange={this.handleChange} />
        <br />
        <span>Bought Price</span>
        <input name="bought" type="text" onChange={this.handleChange} />
        <br />
        <span>Sold Price</span>
        <input name="sold" type="text" onChange={this.handleChange} />
        <br />
        <span>Round Trip Broker Fee</span>
        <input name="fee" type="text" onChange={this.handleChange} />
        <br />
        <span>How many shares?</span>
        <input name="shares" type="text" onChange={this.handleChange} />
        <br />
        <button>Submit form</button>
      </form>
    );
  }
}

export default MainApp;
