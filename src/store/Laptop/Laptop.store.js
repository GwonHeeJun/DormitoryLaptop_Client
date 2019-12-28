export const CHANGE_LAPTOP_ROOM = "CHANGE_LAPTOP_ROOM";
export const CHANGE_ADMIN_LAPTOP_SELECT = "CHANGE_ADMIN_LAPTOP_SELECT";
export const CHANGE_SAW_LAPTOP_LIST = "CHANGE_SAW_LAPTOP_LIST";

const initialState = {
  roomName: "lab1",
  adminSelect: "all",
  seeList: false
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
 *
 * seeList : 관리자 유저의 대여대장 보는지 안보는지 알기위한 State
 *         : true     - 보기
 *         : false    - 보지않기
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
      case CHANGE_SAW_LAPTOP_LIST:
        return {
          ...state,
          seeList: action.payload.seeList
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

export const changeAdminSawLaptop = seeList => ({
  type: CHANGE_SAW_LAPTOP_LIST,
  payload : {
    seeList
  }
});
