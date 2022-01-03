import { AuthorInfo } from "./AuthorInfo"
export type ArticleInfo = {
    author: AuthorInfo,
    body: string,
    coverImage: string,
    createdAt: string,
    id: number,
    lastModified: number,
    likes: number,
    title: string,
    views: number
  }