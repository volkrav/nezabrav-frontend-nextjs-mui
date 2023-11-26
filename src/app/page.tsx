"use client";
import { useState } from "react";
import { Box, Stack } from "@mui/material";
import ActiveModule from "@/components/ActiveModule";
import SelectTabBar from "@/components/SelectTabBar";
import ReportsSearchResult from "@/components/ReportsSearchResult";
import { ESource } from "./api";
import SearchModule from "@/components/SearchModule";
import AddModule from "@/components/AddModule";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("search");
  const [phone, setPhone] = useState("");

  return (
    <Stack>
      <SelectTabBar activeTab={activeTab} onChange={setActiveTab} />
      {/* <ActiveModule activeTab={activeTab} /> */}
      {/* <Stack sx={{ mt: "25px", marginX: "auto" }}> */}
      {activeTab === "search" && (
        <>
          <SearchModule initialValue="" setPhone={setPhone} />

          <ReportsSearchResult source={ESource.nezabrav} phone={phone} />
          <ReportsSearchResult source={ESource.blackbox} phone={phone} />
          <ReportsSearchResult source={ESource.otzyvua} phone={phone} />
        </>
      )}
      {activeTab === "add" && <AddModule />}
      {/* </Stack> */}
    </Stack>
  );
}
