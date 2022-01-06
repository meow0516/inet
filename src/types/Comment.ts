import { AuthorInfo } from './AuthorInfo';

export type Comment = {
  id: number;
  author: AuthorInfo;
  body: string;
  createdAt: string;
  removedAt: string | null;
};
