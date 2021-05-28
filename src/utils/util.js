import user from './assets/user.png';

export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getRandomPhotoURL = () => {
  let num = Math.floor(Math.random() * 2);
  const rando = Math.floor(Math.random() * 100) + 1;
  const men = `https://randomuser.me/api/portraits/men/${rando}.jpg`;
  const women = `https://randomuser.me/api/portraits/women/${rando}.jpg`;

  switch (num) {
    case 0:
      return men;

    case 1:
      return women;

    default:
      return { user };
  }
};
