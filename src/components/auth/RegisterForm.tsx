// components/auth/RegisterForm.tsx
"use client";

import { useState } from "react";
import { Input } from "@/ui/Input/Input";
import { Button } from "@/ui/Button/Button";
import { useRegister } from "@/modules/auth/useRegister";

export const RegisterForm = () => {
  const { handleRegister, loading, error } = useRegister();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [departmentId, setDepartmentId] = useState<number | undefined>();

  const departments = [
    { id: 1, name: "PR" },
    { id: 2, name: "Project" },
    { id: 3, name: "HR" },
    { id: 4, name: "Sales & Marketing" },
    { id: 5, name: "Finance" },
  ];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!departmentId) return;
    handleRegister(email, password, name, departmentId);
  };

  return (
    <form onSubmit={submit}>
      <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <select onChange={(e) => setDepartmentId(Number(e.target.value))}>
        <option>Select department</option>
        {departments.map((d) => (
          <option key={d.id} value={d.id}>
            {d.name}
          </option>
        ))}
      </select>

      {error && <p>{error}</p>}

      <Button disabled={loading}>
        {loading ? "Loading..." : "Register"}
      </Button>
    </form>
  );
};