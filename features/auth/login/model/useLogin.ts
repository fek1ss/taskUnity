import { login } from "@/shared/api/auth";
import { LoginDto } from "../../types/auth";

export const useLogin = () => {
  const handleLogin = async (email: string, password: string) => {
    const data: LoginDto = { email, password };
    await login(data);
  };

  return { handleLogin };
};