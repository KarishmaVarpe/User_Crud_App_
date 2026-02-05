import axios from "axios";
import { User } from "../types";

const API_URL = "http://localhost:5001/users";

export const getUsers = async (): Promise<User[]> => {
  try {
    const res = await axios.get<User[]>(API_URL);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch users. Please check server connection.");
  }
};

export const createUser = async (user: User): Promise<User> => {
  try {
    const res = await axios.post<User>(API_URL, user);
    return res.data;
  } catch (error) {
    throw new Error("Failed to create user. Server might be down.");
  }
};

export const updateUser = async (id: number, user: User): Promise<User> => {
  try {
    const res = await axios.put<User>(`${API_URL}/${id}`, user);
    return res.data;
  } catch (error) {
    throw new Error("Failed to update user. Please retry.");
  }
};

export const deleteUser = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error("Failed to delete user. Server might be down.");
  }
};
