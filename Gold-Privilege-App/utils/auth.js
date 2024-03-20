import axios from "axios";
import store from '@react-native-async-storage/async-storage';


const baseURL = 'https://api-goldprivilege.inovacaong.com/api/User';
export const api = axios.create({ baseURL });

api.interceptors.request.use(
  async (config) => {
    try {
      const token = await store.getItem('token');
      console.log('token', token);
      if (token) config.headers.Authorization = `Bearer ${token}`;
    } catch (error) { };

    return config;
  },
  (error) => Promise.reject(error)
);

export async function createUser(payload) {
  const response = await api.post(`Signup`, payload);
  console.log(response.data);
  return response.data;
};

// export async function verifyEmailAndNumber(option, data) {
//   if (option === "Email") {
//     const response = await api.post(
//       `signUp?email=${data}`
//     );
//     return response.data;
//   }

//   if (option === "Number") {
//     const response = await api.post(
//       `signUp?Number=${data}`
//     );
//     return response.data;
//   }
// };

// export async function login(payload) {
//   const response = await api.post(`login`, payload);
//   return response.data;
// };