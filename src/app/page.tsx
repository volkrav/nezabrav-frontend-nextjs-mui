"use client";
import { useState } from "react";
import { Stack } from "@mui/material";
import SelectTabBar from "@/components/SelectTabBar";
import AddModule from "@/components/AddModule";
import SearchModule from "@/components/SearchModule";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("search");

  return (
    <Stack>
      <SelectTabBar activeTab={activeTab} onChange={setActiveTab} />
      {activeTab === "search" && <SearchModule />}
      {activeTab === "add" && <AddModule />}
    </Stack>
  );
}
