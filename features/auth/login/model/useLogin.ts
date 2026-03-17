import { login } from "@/shared/api/auth";

export const useLogin = () => {
  const handleLogin = async (email: string, password: string) => {
    await login(email, password);
  };

  return { handleLogin };
};