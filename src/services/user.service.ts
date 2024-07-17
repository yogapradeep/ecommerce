const baseUrl = process.env.REACT_APP_API_BASE_URL;
const USER_URL = `${baseUrl}/users`;

export async function createUser(params: { name: string; email: string }) {
  const response = await fetch(USER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  return response.json();
}
