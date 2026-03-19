"use client";

import { useLogin } from "@/modules/auth/useLogin";
import { Button } from "@/ui/Button/Button";
import { Input } from "@/ui/Input/Input";
import { useState } from "react";


export const LoginForm = () => {
  const { handleLogin } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <form
      onSubmit={submit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <Input
        label="Email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        label="Password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit">Login</Button>
    </form>
  );
};