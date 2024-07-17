// src/data/products.ts
import { IProduct } from "../interfaces/IProduct";

type productCatergory = "Table" | "Chairs" | "Top";

export const products: IProduct[] = [
  {
    id: 1,
    name: "Lounge Chair",
    price: 2000,
    category: "Chairs",
    image:
      "https://cdn.bbopokertables.com/upload/thumbnail/400/_upload_file_2019_5_201905020321189719702996_luna.jpg",
  },
  {
    id: 2,
    name: "Dining Chair",
    price: 1800,
    category: "Chairs",
    image:
      "https://cdn.bbopokertables.com/upload/thumbnail/400/_upload_file_2015_10_20151016135262866286.jpg",
  },
  {
    id: 3,
    name: "Table1",
    price: 3000,
    category: "Table",
    image:
      "https://cdn.bbopokertables.com/template/2022/selector/images/3-1.png",
  },
  {
    id: 4,
    name: "Table2",
    price: 3200,
    category: "Table",
    image:
      "https://cdn.bbopokertables.com/template/asset/2021/11/prestige-x/Prestige-X-Gallery-Update-01.jpg",
  },
  {
    id: 5,
    name: "Table3",
    price: 3100,
    category: "Table",
    image:
      "https://cdn.bbopokertables.com/template/asset/2021/11/prestige-x/Prestige-X-Gallery-Update-04.jpg",
  },
  {
    id: 6,
    name: "Dining Top",
    price: 900,
    category: "Top",
    image:
      "https://cdn.bbopokertables.com/upload/file/temp/thumbnail_quality/75/600_400/_upload_file_2015_10_20151016140530233023.jpg",
  },
];
