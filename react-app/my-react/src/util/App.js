import React from "react";
class App extends React.Component {
  constructor() {
    super();
    const currentTime = new Date().toLocaleTimeString();
    this.state = {
      ts: currentTime,
      title: "My Time"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h1>{this.state.ts}</h1>
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      this.setState({ ts: currentTime });
    }, 1000);
  }
}

export default App;
