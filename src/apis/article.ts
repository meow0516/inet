import axios from 'axios';

const getByQuery = () => {
  return axios.get<[]>('process.env.API_URL/articles?cursor=0&page=0&size=25');
};

const ArticleAPI = {
  getByQuery,
};

export default ArticleAPI;
