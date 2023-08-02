import { Product } from '../models/product.model';

export class ProductService {
  private productsData: Array<Product>;

  constructor() {
      this.productsData = [
          {
              id: 1,
              name: "Item One",
              description:
                  "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              status: "Available"
          },
          {
              id: 2,
              name: "Item Two",
              description: "sunt aut facere ptio reprehenderit",
              status: "Not Available"
          },
          {
              id: 3,
              name: "Item Three",
              description: "provident occaecati excepturi optio reprehenderit",
              status: "Available"
          },
          {
              id: 4,
              name: "Item Four",
              description: "reprehenderit",
              status: "Not Available"
          }
      ]
  }

  get Products() {
      return this.productsData;
  }
}
