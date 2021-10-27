import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6171d87bc20f3a001705ff0b.mockapi.io/api/v1/',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  }
});


export async function checkout(data) {
  const response = await api.post('/checkout', data);
  return response;
}
