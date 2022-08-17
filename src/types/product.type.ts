export type Product = {
  id: string;
  name: string;
  price: number;
  img?: string;
};

export type DisplayProduct = Product & {
  displayPrice: string;
};
