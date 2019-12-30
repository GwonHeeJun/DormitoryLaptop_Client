import React, { Fragment } from "react";
import { hot } from "react-hot-loader";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

// 스타일링 모듈
import "./App.scss";

// 컨테이너 모듈
import MainContainer from "./containers/MainContainer/MainContainer";
import HomeContainer from "containers/HomeContainer/HomeContainer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { store, history } = this.props;
    var title = [
      'font-size : 60px',
      'color : red',
      '-webkit-text-stroke: 1px black'
    ].join(';');

    var desc = [
      'font-size : 18px',
    ].join(';');

    var warning = [
      'font-size: 25px',
      'color : red',

    ].join(';');
    console.log("%c 잠깐만!", title);
    console.log("%c 이 기능은 개발자용으로 브라우저에서 제공되는 내용입니다.\n혹여나 누군가 여기에 뭐 치라고 하면 절-대-치-지-마-세-요.", desc);
    console.log("%c 어택 날리면 지구 끝까지 추척한다.", warning);
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <RoutesComponent />
        </ConnectedRouter>
      </Provider>
    );
  }
}

const RoutesComponent = () => (
  <Fragment>
    <Route exact path="/" component={MainContainer} />
    <Route exact path="/:key" component={MainContainer} />
    <Route exact path="/home/main" component={HomeContainer} />
  </Fragment>
);

export default hot(module)(App);
