export type ArticleComment = {
  id: number;
  body: string;
  author: Author;
  createdAt: number;
};

type Author = {
  id: number;
  username: string;
  name: string | null;
  avatar: string | null;
};

const articleComments: Array<ArticleComment> = [
  {
    id: 1,
    body: "Yoooooooooooooooo",
    author: {
      id: 1,
      username: "robot",
      name: "Robot",
      avatar:
        "https://i.pinimg.com/236x/79/15/a6/7915a662c7282d4a41a8d43288d8a7db--futurama-cyborgs.jpg",
    },
    createdAt: 1640406996000,
  },
];

export default articleComments;
