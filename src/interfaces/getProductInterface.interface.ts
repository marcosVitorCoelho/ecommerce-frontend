export interface GetProductProps {
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  category: Category;
  brand: string;
  quantity: number;
  images: Image[];
  sold: number;
  totalrating: string;
  ratings: Rating[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Image {
  url: string;
  asset_id: string;
  public_id: string;
}

interface Rating {
  _id: string;
  star: number;
  comment: string;
  postedby: string;
}
