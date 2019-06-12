import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    item: [
      { id: 1, name: "Apple", amt: 5 },
      { id: 2, name: "Hotdog", amt: 5.5 },
      { id: 3, name: "Ketchup", amt: 3 },
      { id: 4, name: "Mustard", amt: 2 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} />
        ))}
        {this.state.item.map(counter => (
          <Counter key={counter.id} amt={counter.amt} name={counter.name} />
        ))}
      </div>
    );
  }
}

export default Counters;
