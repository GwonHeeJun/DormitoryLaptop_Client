export const CHANGE_LAPTOP_ROOM = "CHANGE_LAPTOP_ROOM";
export const CHANGE_ADMIN_LAPTOP_SELECT = "CHANGE_ADMIN_LAPTOP_SELECT";

const initialState = {
  roomName: "lab1",
  adminSelect: "all"
};

/**
 * 
 * userType : 접속한 유저의 로그인 타입을 알기위한 State
 *          : lab1   - 랩 1실
 *          : lab2   - 랩 2실
 *          : lab3   - 랩 3실
 *          : lab4   - 랩 4실
 *
 * adminSelect : 관리자 유저의 대여대장 옵션 타입을 알기위한 State
 *             : all     - 전체
 *             : useful  - 이용가능
 *             : caught  - 적발
 */

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
      case CHANGE_LAPTOP_ROOM:
        return {
          ...state,
          roomName: action.payload.roomName
        }
      case CHANGE_ADMIN_LAPTOP_SELECT:
        return {
          ...state,
          adminSelect: action.payload.adminSelect
        }
      default:
        return state
    }
  }

export const changeLaptopRoom = roomName => ({
    type: CHANGE_LAPTOP_ROOM,
    payload : {
        roomName
    }
});

export const changeAdminLaptopSelect = adminSelect => ({
  type: CHANGE_ADMIN_LAPTOP_SELECT,
  payload : {
      adminSelect
  }
});
