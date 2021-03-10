const DEV_URL = 'http://localhost:4000/';
const PROD_URL = 'https://sepid-chatapi.herokuapp.com/';
export const API_ROOT = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;
export const API_WS_ROOT = 'ws://localhost:4000/cable';
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};