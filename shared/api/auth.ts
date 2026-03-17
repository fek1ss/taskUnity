// shared/api/auth.ts
import { LoginDto, RegisterDto } from "@/features/auth/types/auth";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;



// Login
export const login = async (data: LoginDto) => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data; // токен, user, или что возвращает бэк
};

// Register
export const register = async (data: RegisterDto) => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};