import axios from 'axios';
import { Comment } from '../types/Comment';

const getById = (id: number) => {
  return axios.get<Array<Comment>>(
    `${process.env.API_URL}/article-comments?articleId=${id}`
  );
};

const create = (id: number, authorId: number, comment: string) => {
  return axios.post<{}>(`${process.env.API_URL}/article-comments`, {
    articleId: id,
    authorId: authorId,
    body: comment,
  });
};

const CommentAPI = {
  getById,
  create,
};

export default CommentAPI;
