"use client";

import { useState } from "react";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { useRegister } from "@/features/auth/register/model/useRegitster";

export const RegisterForm = () => {
  const { handleRegister, loading, error } = useRegister();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister(email, password, name);
  };

  return (
    <form
      onSubmit={submit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <Input
        label="Name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      {error && <div style={{ color: "red" }}>{error}</div>}

      <Button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Register"}
      </Button>
    </form>
  );
};