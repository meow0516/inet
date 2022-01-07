import axios from 'axios';
import { LoginInfo } from '../types/LoginInfo';

export type LoginForm = {
  username: string;
  password: string;
};

const login = (form: LoginForm) => {
  return axios.post<LoginInfo>(`${process.env.API_URL}/auth/login`, form);
};

const AuthApi = {
  login,
};

export default AuthApi;
