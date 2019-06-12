import React, { Component } from "react";
import { isUndefined } from "util";

class Counter extends Component {
  state = {
    value: this.props.value,
    amt: this.props.amt,
    name: this.props.name
  };
  handleIncrement = () => {
    console.log("increment:", this.state);
    if (typeof this.state.name !== "undefined") {
      this.setState({ value: this.state.amt + 1 });
    } else {
      this.setState({ value: this.state.value + 1 });
    }
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <span className="badge m-3 badge-primary">{this.state.name}</span>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // const { value: count } = this.state;
    // return count === 0 ? "Zero" : count;
    console.log("formatCount", this.state.amt);
    return this.state.value === undefined ? this.state.amt : this.state.value;
  }
}

export default Counter;
