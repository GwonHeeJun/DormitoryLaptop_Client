import {createStore, applyMiddleware, compose} from "redux"
import reducers from "./reducers.js";
import createSagaMiddleware from "redux-saga"
// saga 파일 불러오기
import sagas from "./sagas"
import {routerMiddleware} from "connected-react-router";

// 개발 서버 인지 운영 서버 인지 확인
const isDev = process.env.NODE_ENV === "development" || true;

const devtools =
  isDev && window.devToolsExtension
    ? window.devToolsExtension
    : () => fn => fn;

const configureStore = (initialState,history) => {
  // sagaMiddleware 생성
  const sagaMiddleware = createSagaMiddleware()

  // 스토어 인핸서 : 스토어 생산자를 결합하여 새 스토어 생산자를 반환하는 고차 함수
  const enhancer = [
    // applyMiddleware : 미들웨어 연결 해주는 내장 함수

    //enhancer통해서 saga 연결
    applyMiddleware(sagaMiddleware),
    applyMiddleware(routerMiddleware(history)),
    devtools({
      actionsBlacklist: ["trade/UPDATE_TICKER"],
      maxAge: 1000
    })
  ]

  const store = createStore(
    reducers(history),
    initialState,
    compose(...enhancer)
  )

  let sagaTask = sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });
    module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default;
      sagaTask.cancel();
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas);
      });
    });
  }

  store.runSaga = sagaMiddleware.run;

  return store
}

export default configureStore