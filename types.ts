export interface Product {
  id: string;
  name: string;
  price: string;
  productInfo: ProductInfo;
  category: Category;
  brand: Brand;
  condition: Condition;
  storage: Storage;
  memory: Memory;
  color: Color;
  carrier: Carrier;
  network: Network;
  isFeatured: boolean;
  images: Image[];
}
export interface ProductInfo {
  name: string;
  description: string;
  display: string;
  operatingSystem: string;
  processor: string;
  rearCamera: string;
  frontCamera: string;
  battery: string;
  connectivity: string;
  dimensions: string;
}
export interface Image {
  id: string;
  url: string;
}
export interface Category {
  id: string;
  name: string;
}
export interface Brand {
  id: string;
  name: string;
}
export interface Condition {
  id: string;
  name: string;
}
export interface Storage {
  id: string;
  name: string;
}
export interface Color {
  id: string;
  name: string;
  value: string;
}
export interface Carrier {
  id: string,
  name: string
}
export interface Network {
  id: string,
  name: string
}
export interface Memory {
  id: string,
  name: string
}