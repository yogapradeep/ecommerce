const baseUrl = process.env.REACT_APP_API_BASE_URL;
const ORDER_URL = `${baseUrl}/orders`;

export async function createOrder(params: any) {
  const response = await fetch(ORDER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  return response.json();
}
