import axios from 'axios';
import { ArticleInfo } from '../types/ArticleInfo';

const getByQuery = () => {
  return axios.get<Array<ArticleInfo>>(
    `${process.env.API_URL}/articles?cursor=0&page=0&size=25`
  );
};

const getById = (id: number) => {
  return axios.get<ArticleInfo>(`${process.env.API_URL}/articles/${id}`);
};

const create = (
  authorId: number,
  coverImage: string,
  title: string,
  body: string
) => {
  return axios.post<ArticleInfo>(`${process.env.API_URL}/articles`, {
    authorId: authorId,
    coverImage: coverImage,
    title: title,
    body: body,
  });
};

const ArticleAPI = {
  getByQuery,
  getById,
  create,
};

export default ArticleAPI;
