"use client";
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import SelectTabBar from "@/components/SelectTabBar";
import ReportsSearchResult from "@/components/ReportsSearchResult";
import { ESource } from "./api";
import SearchBar from "@/components/SearchBar";
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
