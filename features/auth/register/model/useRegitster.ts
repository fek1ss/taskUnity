// features/auth/register/model/useRegister.ts
import { useState } from "react";
import { register as registerApi, RegisterDto } from "@/shared/api/auth";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (email: string, password: string, name: string) => {
    setLoading(true);
    setError(null);
    try {
      const data: RegisterDto = { email, password, name }; // формируем объект
      const response = await registerApi(data);
      console.log("Registered user:", response);
      // TODO: редирект или сохранение токена
    } catch (err: any) {
      setError(err.response?.data?.message || "Ошибка регистрации");
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, loading, error };
};