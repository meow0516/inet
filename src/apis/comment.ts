import axios from 'axios';
import { Comment } from '../types/Comment';

const getById = (id: number) => {
  return axios.get<Array<Comment>>(
    `${process.env.API_URL}/article-comments?articleId=${id}`
  );
};

const CommentAPI = {
  getById,
};

export default CommentAPI;
