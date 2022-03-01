const data = [
  {
    name: "Pringles Original",
    price: "R$ 9,90",
    code: "5053990156009",
    image:
      "https://res.cloudinary.com/dubsqkz8e/image/upload/v1645980254/rn/IMG_3104_ez56pm.jpg",
  },
  {
    name: "Natas",
    price: "R$ 1,89",
    code: "5601312507697",
    image:
      "https://res.cloudinary.com/dubsqkz8e/image/upload/v1645980254/rn/IMG_3106_rmlh0q.jpg",
  },
  {
    name: "Redbull",
    price: "R$ 12,43",
    code: "9002490247270",
    image:
      "https://res.cloudinary.com/dubsqkz8e/image/upload/v1645980254/rn/IMG_3105_lv4hi8.jpg",
  },
  {
    name: "Coke",
    price: "R$ 2,20",
    code: "90357473",
    image:
      "https://res.cloudinary.com/dubsqkz8e/image/upload/v1645980254/rn/IMG_3107_kkkuy7.jpg",
  },
];

export interface IProduct {
  name: string;
  price: string;
  code: string;
  image: string;
}

export function findProductByCode(code: string) {
  return data.find((product) => product.code === code);
}
