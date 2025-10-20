"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Page = () => {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const onCreateUser = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    }
    const result = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log("User created:", result);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {step == 1 && (
        <div className="w-60">
          <p>Email</p>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="outline" onClick={() => setStep(2)}>
            Next
          </Button>
        </div>
      )}
      {step == 2 && (
        <div className="w-60">
          <p>Password</p>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>Confirm Password</p>
          <Input
            type="password"
            placeholder="ConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button variant="outline" onClick={onCreateUser}>
            Lets Go
          </Button>
        </div>
      )}
    </div>
  );
};

export default Page;
