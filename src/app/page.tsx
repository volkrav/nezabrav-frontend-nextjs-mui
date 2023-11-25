"use client";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import ActiveModule from "@/components/ActiveModule";
import { CustomerReport, ESource, searchReports } from "./api";
import Reports from "@/components/Reports";
import ReportsSearchResult from "@/components/ReportsSearchResult";
import HeaderTabBar from "@/components/HeaderBar";

export default function HomePage() {
  const [phone, setPhone] = useState("");
  const [activeTab, setActiveTab] = useState("search");

  return (
    <Stack>
      <HeaderTabBar activeTab={activeTab} onChange={setActiveTab} />
      <ActiveModule activeTab={activeTab} onChange={setPhone} phone={phone} />

    </Stack>
  );
}
