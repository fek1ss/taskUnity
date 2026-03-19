import { api } from "@/lib/axios";
import { LoginDto, RegisterDto } from "./types";

export const login = async (data: LoginDto) => {
  const res = await api.post("/users/login", data);
  return res.data;
};

export const register = async (data: RegisterDto) => {
  const res = await api.post("/users/register", {
    email: data.email,
    password: data.password,
    full_name: data.name,
    department_id: data.department_id,
  });

  return res.data;
};