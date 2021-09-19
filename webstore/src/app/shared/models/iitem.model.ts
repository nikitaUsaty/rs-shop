export interface IItem {
  id: string;
  name: string;
  imageUrls: string[];
  rating: number;
  availableAmount: number;
  price: number;
  description: string;
  isInCart: boolean;
  isFavorite: boolean;
}

export interface ICart {
  id: string;
}

export interface Favorite {
  id: string;
}
