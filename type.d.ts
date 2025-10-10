interface Product {
  _id: string;
  productId: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  price: number;
  size: string;
  inStock: boolean;
  isSale: boolean;
  isNewArrival: boolean;
  images: string[];
  ingredients: string[];
  benefits: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
