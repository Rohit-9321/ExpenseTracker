import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/expenses";

export const fetchExpenses = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const createExpense = async (expense) => {
  const { data } = await axios.post(BASE_URL, expense);
  return data;
};

export const removeExpense = async (id) => {
  const { data } = await axios.delete(`${BASE_URL}/${id}`);
  return data;
};
