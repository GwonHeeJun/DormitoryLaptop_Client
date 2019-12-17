export const CHANGE_USER_TYPE = "CHANGE_USER_TYPE";

const initialState = {
  userType: ""
};

/**
 * 
 * userType : 접속한 유저의 로그인 타입을 알기위한 State
 *          : admin   - 관리자
 *          : student - 학생
 *          : resident - 사감
 *          : consultant - 자치위원
 * 
 */

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
      case CHANGE_USER_TYPE:
        return {
          ...state,
          userType: action.payload.userType
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