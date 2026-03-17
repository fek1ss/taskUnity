// shared/api/auth.ts
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  name: string;
}

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