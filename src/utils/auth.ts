import Cookies from 'js-cookie';

const tokenKey = process.env.VUE_APP_TOKEN_KEY;

export function getToken() {
  return Cookies.get(tokenKey);
}

export function setToken(token: string) {
  return Cookies.set(tokenKey, token);
}

export function removeToken() {
  return Cookies.get(tokenKey);
}
