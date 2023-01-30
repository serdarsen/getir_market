import Brand from "./Brand";
import Tag from "./Tag";

type Product = {
  id: string;
  tags: Tag[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  brand: Brand;
  itemType: string;
  imageUrl: string;
};

export default Product;
