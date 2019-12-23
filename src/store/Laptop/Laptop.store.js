export const CHANGE_LAPTOP_ROOM = "CHANGE_LAPTOP_ROOM";

const initialState = {
  roomName: "lab1",
};

/**
 * 
 * userType : 접속한 유저의 로그인 타입을 알기위한 State
 *          : lab1   - 랩 1실
 *          : lab2   - 랩 2실
 *          : lab3   - 랩 3실
 *          : lab4   - 랩 4실
 *
 */

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
      case CHANGE_LAPTOP_ROOM:
        return {
          ...state,
          userType: action.payload.userType
        }
      default:
        return state
    }
  }

export const changeUserType = roomName => ({
    type: CHANGE_LAPTOP_ROOM,
    payload : {
        roomName
    }
});
