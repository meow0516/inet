export type User = {
  username: string;
  name: string | null;
  avatar: string | null;
};

const users: Array<User> = [
  {
    username: "robot",
    name: "Robot",
    avatar:
      "https://i.pinimg.com/236x/79/15/a6/7915a662c7282d4a41a8d43288d8a7db--futurama-cyborgs.jpg",
  },
  {
    username: "octopus",
    name: null,
    avatar:
      "https://i.kym-cdn.com/entries/icons/original/000/006/786/zoidberg.png",
  },
  {
    username: "aunt",
    name: "阿姨",
    avatar:
      "https://img.utdstc.com/icon/4f8/7e0/4f87e06495e60f6adeccdc2feb2c46a030a1e35eebb839791d428c4252028a9f:200",
  },
];

export default users;
