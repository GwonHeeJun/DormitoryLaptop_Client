import React, { Component } from "react";
import "./HomeContainer.scss";
import NavigationBar from "components/NavigationBar/NavigationBar";
import ProfileBar from "components/ProfileBar/ProfileBar";
import { connect } from "react-redux";
import Home from "containers/Navigations/Home/Home";
import Laptop from "containers/Navigations/Laptop/Laptop";
import { myLaptop } from "lib/laptop";
import { Redirect } from "react-router-dom";

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myRoom: "",
      mySeat: 0,
      isRedirect: false
    };
  }

  makeMainComponents() {
    const { navigationType } = this.props;
    switch (navigationType) {
      case "home":
        return <Home />;
      case "notice":
        break;
      case "laptop":
        return <Laptop />;
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

  componentDidMount() {
    if (localStorage.getItem("gsm-token")) {
    } else {
      alert("로그인 후 이용해주세요");
      this.setState({ isRedirect: true });
    }
    myLaptop()
      .then(res =>
        this.setState({ myRoom: res.data.room, mySeat: res.data.seat })
      )
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="home-container">
        <div className="home-container__navigation">
          <NavigationBar />
        </div>
        <div className="home-container__content">
          {this.makeMainComponents()}
        </div>
        {localStorage.getItem("authority") === "teacher" ? (
          null
        ) : <div className="home-container__profile">
        <ProfileBar myRoom={this.state.myRoom} mySeat={this.state.mySeat} />
      </div>}
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
