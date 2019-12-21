export const CHANGE_USER_TYPE = "CHANGE_USER_TYPE";
export const CHANGE_AUTH_TYPE = "CHANGE_AUTH_TYPE";
export const CHANGE_NAVIGATION_TYPE = "CHANGE_NAVIGATION_TYPE";

const initialState = {
  userType: "",
  authType: "login",
  navigationType: "home"
};

/**
 * 
 * userType : 접속한 유저의 로그인 타입을 알기위한 State
 *          : admin   - 관리자
 *          : student - 학생
 *          : resident - 사감
 *          : consultant - 자치위원
 * 
 * authType : 접속한 유저의 계정 타입을 알기위한 State
 *          : reigster - 회원가입
 *          : login    - 로그인
 * 
 * navigationType : 로그인한 유저의 왼쪽 네비게이션 바의 타입을 알기 위한 State
 *                : notice  - 공지사항
 *                : laptop  - 노트북 대여
 *                : song    - 기상음악
 *                : point   - 상벌점
 *                : setting - 설정
 *                : report  - 버그제보
 */

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
      case CHANGE_USER_TYPE:
        return {
          ...state,
          userType: action.payload.userType
        }
      case CHANGE_AUTH_TYPE:
        return {
          ...state,
          authType: action.payload.authType
        }
      case CHANGE_NAVIGATION_TYPE:
        return {
          ...state,
          navigationType: action.payload.navigationType
        }
      default:
        return state
    }
  }

export const changeUserType = userType => ({
    type: CHANGE_USER_TYPE,
    payload : {
        userType
    }
});

export const changeAuthType = authType => ({
  type: CHANGE_AUTH_TYPE,
  payload : {
      authType
  }
});

export const changeNavigationType = navigationType => ({
  type: CHANGE_NAVIGATION_TYPE,
  payload: {
    navigationType
  }
})