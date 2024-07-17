export type IproductCatergory = "Table" | "Chairs" | "Top";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: IproductCatergory;
  image: string;
}
