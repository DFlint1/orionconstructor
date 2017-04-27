import React from "react";


export default class Title extends React.Component {
  render() {
    return (
      <h1 className="text-center">{this.props.title}</h1>
    );
  }
}
