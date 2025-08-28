const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getProductList(searchTerm) {
  const response = await fetch(
    `${BASE_URL}/444/products?name_like=${searchTerm ? searchTerm : ""}`
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
}

export async function getProduct(id) {
  const response = await fetch(
    `${BASE_URL}/444/products/${id}`
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
}

export async function getFeaturedList() {
  const response = await fetch(
    `${BASE_URL}/444/featured_products`
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
}
