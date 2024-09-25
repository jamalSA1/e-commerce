import Products from "../../(pages)/products/page";

export default async function Promotion() {
  const productsComponent = await Products();
  return productsComponent;
}
