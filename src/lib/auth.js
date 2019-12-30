import Api from "services/api";
import { url } from "constant/apiUrl";

export const localRegister = ({ type, email, password, verification_code }) =>
  Api.ajax("post", url.gsm, `auth/register/${type}`, {
    email,
    password,
    verification_code
  });

export const localLogin = ({ type, email, password }) =>
  Api.ajax("post", url.gsm, `auth/login/${type}`, {
    email,
    password
  });

export const UserInfo = () => 
  Api.ajax("get" , url.gsm, 'user/refresh', {
    headers: {
      token : localStorage.getItem('gsm-token')
    }
  });

export const CheckUser = ({ token }) => 
  Api.ajax("get" , url.gsm, 'user/refresh', {
    headers: {
      token : localStorage.getItem('gsm-token')
    }
  });

export const CheckEmailVertication = ({ keyValue }) =>
  Api.ajax("get", url.gsm, `auth/verification?key=${keyValue}`);