import React, { Component } from "react";
import { ReactComponent as Calendar } from "assets/image/calendar.svg";
import { connect } from "react-redux";
import { changeAdminLaptopSelect } from "store/Laptop/Laptop.store";
import "./AdminLaptop.scss";
import AdminLaptopList from "../AdminLaptopList/AdminLaptopList";
import { roomDetailUpgrade } from "lib/laptop";

class AdminLaptop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomDetail: [],
      roomUse: [],
      roomCaught: [],
      caught: 0,
      use: 0
    };

    this.onClickChangeAdminSelect = this.onClickChangeAdminSelect.bind();
  }

  onClickChangeAdminSelect = (e, adminSelect) => {
    const { changeAdminLaptopSelect } = this.props;
    e.stopPropagation();

    changeAdminLaptopSelect(adminSelect);
  };

  componentDidMount() {
    this.setState({
      roomDetail: this.props.roomDetail
    });
    roomDetailUpgrade({ type: "use" })
      .then(res =>
        this.setState({
          roomUse: res.data.seats
        })
      )
      .catch(err => console.log(err));
    roomDetailUpgrade({ type: "caught" })
      .then(res =>
        this.setState({
          roomCaught: res.data.seats
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const { adminSelect } = this.props;
    var today = new Date();
    var nowMonth = today.getMonth() + 1,
      nowYear = today.getFullYear(),
      nowDay = today.getDay(),
      nowDate = today.getDate();
    switch (nowDay) {
      case 1:
        nowDay = "월";
        break;
      case 2:
        nowDay = "화";
        break;
      case 3:
        nowDay = "수";
        break;
      case 4:
        nowDay = "목";
        break;
      case 5:
        nowDay = "금";
        break;
      case 6:
        nowDay = "토";
        break;
      case 7:
        nowDay = "일";
        break;
      default:
        break;
    }
    return (
      <div className="c-admin-laptop">
        <div className="c-admin-laptop__header">
          <h2>대여대장</h2>
          <div className="c-admin-laptop__header--status">
            <div className="c-admin-laptop__header--status__option">
              <div
                className={adminSelect === "all" ? "box-active" : "box"}
                onClick={e => this.onClickChangeAdminSelect(e, "all")}
              >
                <span>전체</span>
                <small>{this.props.roomDetail.length}</small>
              </div>
              <div
                className={adminSelect === "use" ? "box-active" : "box"}
                onClick={e => this.onClickChangeAdminSelect(e, "use")}
              >
                <span>이용가능</span>
                <small>{this.state.roomUse.length}</small>
              </div>
              <div
                className={adminSelect === "caught" ? "box-active" : "box"}
                onClick={e => this.onClickChangeAdminSelect(e, "caught")}
              >
                <span>적발</span>
                <small>{this.state.roomCaught.length}</small>
              </div>
            </div>
            <div className="c-admin-laptop__header--status__date">
              <span>
                {nowYear}-{nowMonth}-{nowDate} ({nowDay})
              </span>
              <Calendar />
            </div>
          </div>
        </div>
        <div className="c-admin-laptop__content">
          <AdminLaptopList userList={this.props.roomDetail} type={adminSelect}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adminSelect: state.laptop.adminSelect
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeAdminLaptopSelect: adminSelect =>
      dispatch(changeAdminLaptopSelect(adminSelect))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLaptop);
