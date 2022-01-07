import axios from 'axios';

const create = (username: string, password: string) => {
  return axios.post<{}>(`${process.env.API_URL}/users`, {
    username: username,
    password: password,
  });
};

const UserAPI = {
  create,
};

export default UserAPI;
