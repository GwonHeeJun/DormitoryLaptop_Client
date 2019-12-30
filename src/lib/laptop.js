
import Api from "services/api";
import { url } from "constant/apiUrl";

export const myLaptop = () => 
  Api.ajax("get" , url.gsm, 'laptop', {
    headers: {
      token : localStorage.getItem('gsm-token')
    }
  });

export const laptopBorrow = ({ room, seat }) =>
  Api.ajax("post", url.gsm, 'laptop', {
    room,
    seat
  },
  {
    headers:  {
      token: localStorage.getItem('gsm-token')
  }
  });

export const laptopMove = ({  room, seat }) =>
  Api.ajax("put", url.gsm, 'laptop', {
    room,
    seat
  });

export const blockConfirm = ({ user_id }) => 
  Api.ajax("put" , url.gsm, `laptop/block/${user_id}`, {},
   {
     headers: {
      token : localStorage.getItem('gsm-token')
     }
   });

export const laptopCancel = () =>
  Api.ajax("delete", url.gsm, 'laptop', {
    headers: {
        token : localStorage.getItem('gsm-token')
    }
  });

export const laptopRoomList = () => 
  Api.ajax("get" , url.gsm, 'laptop/rooms/list', {
    headers: {
      token : localStorage.getItem('gsm-token')
    }
  });

export const roomSeat = ({ roomName }) => 
  Api.ajax("get" , url.gsm, `laptop/rooms/${roomName}`, {
    headers: {
      token : localStorage.getItem('gsm-token')
    }
  });

export const roomDetail = () => 
  Api.ajax("get" , url.gsm, `laptop/rooms`, {
    headers: {
      token : localStorage.getItem('gsm-token')
    }
  });

export const laptopBlock = ({ user_id, duration }) => 
  Api.ajax("post" , url.gsm, `laptop/block`, {
    user_id,
    duration,
    
  }, {
    headers: {
      token : localStorage.getItem('gsm-token')
    }
  });

export const blockCancel = ({ user_id }) => 
  Api.ajax("delete" , url.gsm, `laptop/block/${user_id}`, {
    headers: {
      token : localStorage.getItem('gsm-token')
    }
  });

export const roomDetailUpgrade = ({ type }) => 
  Api.ajax("get" , url.gsm, `laptop/rooms?type=${type}`, {
    headers: {
      token : localStorage.getItem('gsm-token')
    }
  });