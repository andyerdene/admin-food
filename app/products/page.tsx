"use client";
import { Badge } from "@/components/ui/badge";
import { AdminLayout } from "../_components/AdminLayout";
import { CreateFoodDialog } from "../_components/CreateFoodDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [categories, setCategories] = useState<string[]>([]);

  const getCategories = async () => {
    const result = await fetch("http://localhost:4000/categories");
    const responseData = await result.json();
    const { data } = responseData;
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <AdminLayout className="">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge variant={"outline"}>{category}</Badge>
        ))}
        <Dialog>
          <DialogTrigger asChild>
            <Badge
              variant={"outline"}
              className="cursor-pointer hover:bg-gray-500/20"
            >
              +
            </Badge>
          </DialogTrigger>
          <DialogContent className="w-[463px] p-6">
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <CreateFoodDialog />
    </AdminLayout>
  );
}
