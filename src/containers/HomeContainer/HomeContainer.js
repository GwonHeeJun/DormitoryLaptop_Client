import React, { Component } from "react";
import "./HomeContainer.scss";
import NavigationBar from "components/NavigationBar/NavigationBar";
import ProfileBar from "components/ProfileBar/ProfileBar";
import { connect } from "react-redux";
import Home from "containers/Navigations/Home/Home";
import Laptop from "containers/Navigations/Laptop/Laptop";

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  makeMainComponents() {
    const { navigationType } = this.props;
    switch (navigationType) {
      case "home":
        return <Home />
      case "notice":
        break;
      case "laptop":
        return <Laptop />
      case "song":
        break;
      case "point":
        break;
      case "setting":
        break;
      case "report":
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-container__navigation">
          <NavigationBar />
        </div>
        <div className="home-container__content">
            {this.makeMainComponents()}
        </div>
        <div className="home-container__profile">
          <ProfileBar />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    navigationType: state.menu.navigationType
  };
};

export default connect(mapStateToProps, null)(HomeContainer);
