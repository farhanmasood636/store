<<<<<<< HEAD
export interface Product {
  id: string;
  category: Category;
  name: string;
  description: string;
  price: string;
  isFeatured: boolean;
  display: string;
  operatingSystem: string;
  processor: string;
  memory: string;
  rearCamera: string;
  frontCamera: string;
  battery: string;
  connectivity: string;
  dimensions: string;
  brand: Brand;
  condition: Condition;
  storage: Storage;
  color: Color;
  carrier: Carrier;
  network: Network;
  images: Image[];
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
=======
export interface Product {
  id: string;
  category: Category;
  name: string;
  description: string;
  price: string;
  isFeatured: boolean;
  display: string;
  operatingSystem: string;
  processor: string;
  memory: string;
  rearCamera: string;
  frontCamera: string;
  battery: string;
  connectivity: string;
  dimensions: string;
  brand: Brand;
  condition: Condition;
  storage: Storage;
  color: Color;
  carrier: Carrier;
  network: Network;
  images: Image[];
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
>>>>>>> 3a148d62be3a05dedc475831319017f878679baa
}