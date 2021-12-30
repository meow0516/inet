export type ArticleDetail = {
  id: number;
  coverImage: string;
  title: string;
  body: string;
  author: Author;
  views: number;
  likes: number;
  createdAt: number;
  lastModifiedAt: number;
};

type Author = {
  id: number;
  username: string;
  name: string | null;
  avatar: string | null;
};

const articleDetails: Array<ArticleDetail> = [
  {
    id: 1,
    coverImage:
      "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    title: "Dog 0",
    body: "Donec imperdiet venenatis turpis, nec placerat tortor vehicula a. Phasellus enim lectus, lacinia nec mi quis, ullamcorper rhoncus turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque luctus ultricies orci, sit amet vestibulum nisl. Curabitur condimentum purus vitae lacus scelerisque, eu mattis mi ornare. Cras bibendum sodales velit, at sagittis tortor bibendum vitae. Cras bibendum neque vel felis tincidunt, in luctus metus aliquam.",
    author: {
      id: 1,
      username: "robot",
      name: "Robot",
      avatar:
        "https://i.pinimg.com/236x/79/15/a6/7915a662c7282d4a41a8d43288d8a7db--futurama-cyborgs.jpg",
    },
    views: 12345,
    likes: 6789,
    createdAt: 1640406896000,
    lastModifiedAt: 1640682083000,
  },
  {
    id: 2,
    coverImage:
      "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Dog 1",
    body: "Nulla tempus, augue non bibendum euismod, ex orci vehicula arcu, eu accumsan arcu dui ut velit. Vivamus placerat nunc massa, a tincidunt tellus egestas vel. Aenean viverra ullamcorper dignissim. Phasellus maximus nulla ac ipsum semper efficitur. Sed aliquet sed est et vestibulum. Proin tellus quam, pulvinar in tristique sed, molestie quis metus. Nunc in velit finibus, tincidunt eros vitae, dignissim turpis. Proin eget lectus justo.",
    author: {
      id: 2,
      username: "octopus",
      name: null,
      avatar:
        "https://i.kym-cdn.com/entries/icons/original/000/006/786/zoidberg.png",
    },
    views: 5,
    likes: 0,
    createdAt: 1640304000000,
    lastModifiedAt: null,
  },
];

export default articleDetails;
