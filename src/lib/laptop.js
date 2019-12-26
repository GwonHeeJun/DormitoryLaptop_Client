
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
  Api.ajax("get" , url.gsm, `laptop/block`, {
    user_id,
    duration,
    headers: {
      token : localStorage.getItem('gsm-token')
    }
  });

export const laptopBlockCancel = ({ userId }) => 
  Api.ajax("get" , url.gsm, `laptop/block/${userId}`, {
    headers: {
      token : localStorage.getItem('gsm-token')
    }
  });