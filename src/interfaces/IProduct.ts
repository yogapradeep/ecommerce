export type IproductCatergory = "chairs" | "tables" | "tops";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: IproductCatergory;
  image: string;
}
