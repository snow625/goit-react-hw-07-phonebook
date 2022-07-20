import axios from "axios";

const instanse = axios.create({
  baseURL: "https://62d59aae15ad24cbf2ca715f.mockapi.io/contacts",
});

export const getItems = async () => {
  const { data } = await instanse.get("/");
  return data;
};

export const deleteItem = async (id) => {
  const { data } = await instanse.delete(`/${id}`);
  return data;
};

export const addItem = async (data) => {
  const { data: result } = await instanse.post("/", data);
  return result;
};
