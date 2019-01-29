import React, { Component } from "react";
import "./styles/main.scss";
export default class ChatScreen extends Component {
  render() {
    return (
      <form id="message-form" className="chat-form">
        <div className="input-group mb-5 ">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Username
            </span>
          </div>
          <input type="text" className="form-control" id="username" />
        </div>
        <div className="input-group mb-5">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Say hello
            </span>
          </div>
          <input type="text" className="form-control" id="message" />
        </div>
        <div>
          <input className="btn btn-dark mb-5" type="submit" value="SEND" />
        </div>
      </form>
    );
  }
}
