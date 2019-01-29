import React, { Component } from "react";
const title = "My Minimal React Webpack Babel Setup";
import ChatScreen from "./components/ChatScreen";
export default class App extends Component {
  render() {
    return (
      <div>
        <ChatScreen />
      </div>
    );
  }
}
