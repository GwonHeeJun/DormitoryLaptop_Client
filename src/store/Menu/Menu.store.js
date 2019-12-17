export const CHANGE_USER_TYPE = "CHANGE_USER_TYPE";
export const CHANGE_AUTH_TYPE = "CHANGE_AUTH_TYPE";

const initialState = {
  userType: "",
  authType: "login"
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