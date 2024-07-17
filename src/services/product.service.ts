const baseUrl = process.env.REACT_APP_API_BASE_URL;
console.log("process.env", process.env);

const PRODUCT_URL = `${baseUrl}/products`;

export async function fetchProducts() {
  const response = await fetch(PRODUCT_URL);
  return await response.json();
}
