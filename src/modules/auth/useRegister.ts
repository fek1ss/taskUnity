// modules/auth/useRegister.ts
import { useState } from "react";
import { register } from "./api";
import axios from "axios";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (
    email: string,
    password: string,
    name: string,
    department_id: number
  ) => {
    setLoading(true);
    setError(null);

    try {
      const res = await register({
        email,
        password,
        name,
        department_id,
      });

      console.log(res);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Ошибка регистрации");
      } else {
        setError("Неизвестная ошибка");
      }
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, loading, error };
};