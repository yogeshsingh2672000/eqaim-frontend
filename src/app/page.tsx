"use client";
import React, { useEffect, useState } from "react";
import Categories from "@/components/Categories";
import Dashboard from "@/components/Dashboard/Dashboard";
import LogoBoard from "@/components/LogoBoard";
import Roadmap from "@/components/Roadmap";
import { getData } from "@/hooks/getData";

export default function Home() {
  const [rawData, setRawData] = useState(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [status, setStatus] = useState<string[]>([]);

  const getCategoryAndStatus = (data: Object[]) => {
    const newCategoriesSet = new Set<string>();
    const newStatusSet = new Set<string>();

    for (let obj of data) {
      newCategoriesSet.add(obj.category);
      newStatusSet.add(obj.status);
    }

    setCategories([...newCategoriesSet]);
    setStatus([...newStatusSet]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setRawData(data["0"]);
      getCategoryAndStatus(data["0"].productRequests);
    };

    fetchData();
  }, []);

  return (
    <main className="flex w-full px-[165px] py-[94px] gap-[30px]">
      <div className="flex flex-col gap-[24px] max-w-[255px]">
        <LogoBoard />
        <Categories categories={categories} />
        <Roadmap status={status} />
      </div>
      <div className="w-full">{rawData && <Dashboard rawData={rawData} />}</div>
    </main>
  );
}
