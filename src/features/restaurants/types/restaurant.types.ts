export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  price: string;
  rating: number;
  distance: string;
  imageUrl: string;
  isOpen: boolean;
  openingTime: string;
  closingTime: string;
  position: {
    lat: number;
    lng: number;
  };
  address?: string;
  phone?: string;
  website?: string;
  description?: string;
  features: string[];
  photos?: string[];
}
