import axios from "axios";

export const api = {
  getProducts: () => axios.get('/products/'),
  getBaskets: (id) => axios.get(`/baskets/${id}/`),
  getBasketDetail: (id) => axios.get(`/basket_detail${id}`)
}