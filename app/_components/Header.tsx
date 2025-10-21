"use client";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

export const Header = () => {
  const userEmail = localStorage.getItem("userEmail");
  const router = useRouter();

  const onLogout = () => {
    localStorage.removeItem("userEmail");
    router.push("login");
  };

  return (
    <div className="bg-blue-500 w-full h-16 flex items-center justify-between p-8">
      <p>{userEmail}</p>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Logout</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onLogout}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
