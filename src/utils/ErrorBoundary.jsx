import React, { Component } from "react";
import NotFound from "./404";

class ErrorBoundary extends Component {
  static getDerivedStateFromError() {
    return { error: true };
  }

  state = {
    error: false,
  };

  componentDidCatch(err) {
    console.log(err);
  }

  render() {
    if (this.state.error) {
      return <NotFound />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
