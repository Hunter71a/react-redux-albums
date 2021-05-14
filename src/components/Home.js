import React, { Component } from "react";
import { connect } from "react-redux";
import { artistsListAll } from "../store/actions";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(artistsListAll());
  }

  render() {
    return <div>HOME PAGE FOR CHUMPS!</div>;
  }
}

function mapStateToProps(state) {
  return {
    artists: state.artists,
  };
}

export default connect(mapStateToProps)(Home);
